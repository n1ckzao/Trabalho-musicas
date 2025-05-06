'use strict'

import { getMusicas } from "./js/musicas.js"

function formatarDuracao(iso){
    const data = new Date(iso)
    const minuto = data.getUTCMinutes().toString().padStart(2, '0')
    const segundos = data.getUTCSeconds().toString().padStart(2, '0')
    return `${minuto}m${segundos}`
}

function criarCard(musica){
    const container = document.getElementById("container")
    const card = document.createElement("div")
    card.classList.add("card-musica")
    card.innerHTML = `
    <h1>${musica.nome}</h1>
    <h2>${formatarDuracao(musica.duracao)}</h2>
    <p>${musica.letra}</p>
    <a href="${musica.link}">Ouça a música</a>
    `
    container.appendChild(card)
}
async function exibirMusicas() {
    const musicas = await getMusicas()
    musicas.forEach(criarCard)
}

exibirMusicas()