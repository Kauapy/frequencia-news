import React from 'react'
import { Link } from 'react-router-dom'

//API cotação de moedas


const taskbar = () => {
  return (
    <section>
        <h2>Frequência News</h2>
        <Link to="/politica">Política</Link>
        <Link to="/podcast">PodCast</Link>
        <Link to="/sobre-nos">Sobre Nós</Link>
    </section>
  )
}

export default taskbar