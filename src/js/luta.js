function luta(player, monstro) {
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)
    footer.innerHTML = `Voce esta lutando contra o ${monstro.nome} escolha um ataque`
    writer(footer)

    const div = document.createElement('div')
    div.classList.add('containerLuta')

    const divLuta = document.createElement('div')
    divLuta.classList.add('divLuta')

    const divPlayer = document.createElement('div')
    divPlayer.classList.add('containerPlayer')
    const playerNome = document.createElement('p')
    playerNome.innerHTML = player.nome
    divPlayer.appendChild(playerNome)
    const imgPlayer = document.createElement('img')
    imgPlayer.src = player.img
    divPlayer.appendChild(imgPlayer)

    const divVs = document.createElement('div')
    divVs.classList.add('containerVs')
    const imgVs = document.createElement('img')
    imgVs.src = './src/img/vs.png'
    divVs.appendChild(imgVs)

    const divMonstro = document.createElement('div')
    divMonstro.classList.add('containerMonstro')
    const monstroNome = document.createElement('p')
    monstroNome.innerHTML = monstro.nome
    divMonstro.appendChild(monstroNome)
    const imgMonstro = document.createElement('img')
    imgMonstro.src = monstro.img
    divMonstro.appendChild(imgMonstro)

    divLuta.appendChild(divPlayer)
    divLuta.appendChild(divVs)
    divLuta.appendChild(divMonstro)

    const divAtacks = document.createElement('div')
    divAtacks.classList.add('golpes')
    player.atacks.forEach(atack => {
        const buttonAtack = document.createElement('button')
        buttonAtack.innerHTML = atack.title
        addEvent(buttonAtack, footer, player, atack, monstro, divAtacks)
        buttonAtack.classList.add('ataques')
        divAtacks.appendChild(buttonAtack)
    })
    div.appendChild(divLuta)
    div.appendChild(divAtacks)
    main.appendChild(div)
}

function addEvent(buttonAtack, footer, player, atack, monstro) {
    buttonAtack.addEventListener('click', () => {
        const divAtacks = document.querySelector('.golpes')
        divAtacks.style.display = 'none'
        const body = document.querySelector('body')
        footer.remove()
        footer = document.createElement('footer')
        body.appendChild(footer)
        footer.innerHTML = atack.funcao(monstro)
        writer(footer)
        footer.addEventListener('click', () => verifica(player, monstro) ? playerWins(player, monstro, footer) : vezDoMonstro(player, monstro, footer))
    })
}

function verifica(player, monstro) {
    if (player.vida == 0 || monstro.vida == 0) return true
    return false
}

function playerWins(player, monstro, footer) {
    const body = document.querySelector('body')
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)
    footer.innerHTML = `${player.nome} venceu a batalha contra o ${monstro.nome}. Parabens!!!`
    writer(footer)
    player.retornaVida()
    footer.addEventListener('click', () => recebeXp(player, monstro, footer))
}

function recebeXp(player, monstro, footer) {
    const body = document.querySelector('body')
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)
    footer.innerHTML = player.recebeXp(monstro.exp)
    writer(footer)
    footer.addEventListener('click', () => menu(player))
}

function vezDoMonstro(player, monstro, footer) {
    const body = document.querySelector('body')
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)
    const random = getRandomPower(0, 1)
    const titlePower = monstro.powers[random].title
    footer.innerHTML = monstro.powers[random].funcao(player, titlePower)
    writer(footer)
    footer.addEventListener('click', () => verifica(player, monstro) ? monsterWins(player, monstro, footer) : vezDoPlayer(player, monstro, footer))
}

function vezDoPlayer(player, monstro, footer) {
    const body = document.querySelector('body')
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)
    footer.innerHTML = 'Sua vez novamente, escolha um ataque:'
    writer(footer)
    const divAtacks = document.querySelector('.golpes')
    divAtacks.innerHTML = ''
    divAtacks.style.display = 'block'
    player.atacks.forEach(atack => {
        const buttonAtack = document.createElement('button')
        buttonAtack.innerHTML = atack.title
        addEvent(buttonAtack, footer, player, atack, monstro, divAtacks)
        buttonAtack.classList.add('ataques')
        divAtacks.appendChild(buttonAtack)
    })
}

function getRandomPower(min, max) {
    const randon = Math.random();
    return randon < 0.5 ? Math.floor(randon * (max - min) + min) : Math.ceil(randon * (max - min) + min)
}

luta(new Warrior('', 'Guiry', ''), new Monstro1())