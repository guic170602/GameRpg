function dungeon(player) {
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)
    footer.innerHTML = `Para qual cidade deseja ir se aventurar??`
    writer(footer)
    const div = document.createElement('div')
    div.classList.add('containerCidades')
    const fechar = document.createElement('button')
    fechar.classList.add('fechar')
    fechar.addEventListener('click', () => menu(player))
    div.appendChild(fechar)
    const h2 = document.createElement('h2')
    h2.innerHTML = 'Dungeon'
    div.appendChild(h2)
    div.appendChild(andar1(player))
    div.appendChild(andar2(player))
    div.appendChild(andar3(player))
    div.appendChild(andar4(player))
    div.appendChild(andar5(player))
    main.appendChild(div)
}

function andar1(player) {
    const andar = document.createElement('button')
    const pAndar = document.createElement('p')
    pAndar.innerHTML = 'Cidade 1: Laguna, a aldeia das bestas encantadas:'
    andar.appendChild(pAndar)
    const monstro = document.createElement('p')
    monstro.innerHTML = 'Monstro: Slime level 1'
    andar.appendChild(monstro)
    andar.id = 'laguna'
    andar.addEventListener('click', () => {
        player.retornaVida()
        const monstro = new Slime()
        if (!(player.cidades.laguna)) {
            antes(player, monstro)
        } else {
            luta(player, monstro)
        }
    })
    return andar
}

function andar2(player) {
    const andar = document.createElement('button')
    const pAndar = document.createElement('p')
    pAndar.innerHTML = 'Andar 2:'
    andar.appendChild(pAndar)
    const monstro = document.createElement('p')
    monstro.innerHTML = 'Monstro level 3'
    andar.appendChild(monstro)
    andar.classList.add('monstros')
    andar.addEventListener('click', () => {
        player.retornaVida()
        const monstro = new Goblin()
        luta(player, monstro)
    })
    return andar
}

function andar3(player) {
    const andar = document.createElement('button')
    const pAndar = document.createElement('p')
    pAndar.innerHTML = 'Andar 3:'
    andar.appendChild(pAndar)
    const monstro = document.createElement('p')
    monstro.innerHTML = 'Monstro level 5'
    andar.appendChild(monstro)
    andar.classList.add('monstros')
    return andar
}

function andar4(player) {
    const andar = document.createElement('button')
    const pAndar = document.createElement('p')
    pAndar.innerHTML = 'Andar 4:'
    andar.appendChild(pAndar)
    const monstro = document.createElement('p')
    monstro.innerHTML = 'Monstro level 7'
    andar.appendChild(monstro)
    andar.classList.add('monstros')
    return andar
}

function andar5(player) {
    const andar = document.createElement('button')
    const pAndar = document.createElement('p')
    pAndar.innerHTML = 'Andar 5:'
    andar.appendChild(pAndar)
    const monstro = document.createElement('p')
    monstro.innerHTML = 'Monstro level 10'
    andar.appendChild(monstro)
    andar.classList.add('monstros')
    return andar
}