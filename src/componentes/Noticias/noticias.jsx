import React, { useEffect, useState } from "react";

const noticias = () => {

    useEffect(() => {
        fetch("/http://localhost:3001/noticias")
        .then(res => res.json())
        .then(data => setNoticias(data))
    })

  return (
    <div>
      <h2>Últimas Notícias</h2>
      {noticias.map((noticia, index) => (
        <div key={index} className="noticia-card">
          <h3>{noticia.title}</h3>
          <p>{noticia.description || "Sem descrição disponível."}</p>
          <p>
            <strong>Fonte:</strong> {noticia.source_id}
          </p>
          <p>
            <strong>Data:</strong> {new Date(noticia.pubDate).toLocaleString()}
          </p>
          <a href={noticia.link} target="_blank" rel="noopener noreferrer">
            Leia mais
          </a>
        </div>
      ))}
    </div>
  );
};

export default noticias;
