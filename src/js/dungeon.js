function dungeon(player) {
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = `Por favor escolha um andar para se aventurar!!`
    writer(footer)
    const div = document.createElement('div')
    div.classList.add('containerDungeon')
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
    pAndar.innerHTML = 'Andar 1:'
    andar.appendChild(pAndar)
    const monstro = document.createElement('p')
    monstro.innerHTML = 'Monstro level 1'
    andar.appendChild(monstro)
    andar.classList.add('monstros')
    andar.addEventListener('click', () => {
        const monster = new Monstro1()
        luta(player, monster)
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