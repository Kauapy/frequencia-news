const express = require("express")
const cors =  require("cors")
const fetch = require("node-fetch")
const app = express()

app.use(cors())

let cacheNoticias = []
let ultimaAtualizacao = null
app.get('/noticias', async (req, res) => {
    const agora = new Date()
    const precisaAtualizar = !ultimaAtualizacao || (agora - ultimaAtualizacao > 1000 * 60 * 60 * 24); // 24h

    if( precisaAtualizar) {
        const url = 'https://newsdata.io/api/1/latest?apikey=pub_69fe466e26ff470696dfbc826d56b218&country=br&language=pt&category=politics';
        const resposta = await fetch(url)
        const dados = await resposta.json()
        cacheNoticias = dados.results
        ultimaAtualizacao = new Date()
    }
    res,json(cacheNoticias.slice(0, 10 )) //envia só 10 pro front
})

app.listen(3001, () => console.log("Backend rodando na porta 3001")
)