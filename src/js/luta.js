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
    const vidaTotalPlayer = document.createElement('div')
    vidaTotalPlayer.classList.add('vidaTotalPlayer')
    divPlayer.appendChild(vidaTotalPlayer)
    const vidaPlayer = document.createElement('div')
    vidaPlayer.style.width = '100%'
    vidaPlayer.style.height = '30px'
    vidaPlayer.classList.add('vidaPlayer')
    vidaTotalPlayer.appendChild(vidaPlayer)
    const pVidaPlayer = document.createElement('p')
    pVidaPlayer.innerHTML = `${player.vida}/${player.vidaMax}`
    vidaTotalPlayer.appendChild(pVidaPlayer)
    imgPlayer.classList.add('comecoLutaPlayer')

    const divVs = document.createElement('div')
    divVs.classList.add('containerVs')
    const imgVs = document.createElement('img')
    imgVs.src = './src/img/vs.png'
    divVs.appendChild(imgVs)
    imgVs.style.animation = 'vs 1s infinite'

    const divMonstro = document.createElement('div')
    divMonstro.classList.add('containerMonstro')
    const monstroNome = document.createElement('p')
    monstroNome.innerHTML = monstro.nome
    divMonstro.appendChild(monstroNome)
    const imgMonstro = document.createElement('img')
    imgMonstro.src = monstro.img
    divMonstro.appendChild(imgMonstro)
    const vidaTotalMonstro = document.createElement('div')
    vidaTotalMonstro.classList.add('vidaTotalMonstro')
    const vidaMonstro = document.createElement('div')
    vidaMonstro.style.width = '100%'
    vidaMonstro.style.height = '30px'
    vidaMonstro.classList.add('vidaMonstro')
    vidaTotalMonstro.appendChild(vidaMonstro)
    const pVidaMonstro = document.createElement('p')
    pVidaMonstro.innerHTML = `${monstro.vida}/${monstro.vidaMax}`
    vidaTotalMonstro.appendChild(pVidaMonstro)
    divMonstro.appendChild(vidaTotalMonstro)
    imgMonstro.classList.add('comecoLutaMonstro')

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
        // Remover as EventListneer
        const body = document.querySelector('body')
        footer.remove()
        footer = document.createElement('footer')
        body.appendChild(footer)

        // Escondendo os Golpes
        const divAtacks = document.querySelector('.golpes')
        divAtacks.style.display = 'none'

        // Tira a animação do começo da luta
        const imgPlayer = document.querySelector('.containerPlayer img')
        imgPlayer.classList.remove('comecoLutaPlayer')
        const imgMonstro = document.querySelector('.containerMonstro img')
        imgMonstro.classList.remove('comecoLutaMonstro')

        // Adiciona a animação de bater no Monstro
        imgPlayer.classList.add('baterNoMonstro')

        //Recebe a vida de antes de bater
        let cont = monstro.vida

        // Escreve no footer o dano dado no monstro
        footer.innerHTML = atack.funcao(monstro)
        writer(footer)

        // Animação da vida do Monstro
        const vidaMonstro = document.querySelector('.vidaMonstro')
        const pVidaMonstro = document.querySelector('.vidaTotalMonstro p')
        const tiraVida = setInterval(() => {
            vidaMonstro.style.width = `${cont/monstro.vidaMax * 100}%`
            pVidaMonstro.innerHTML = `${cont}/${monstro.vidaMax}`
            if (cont === monstro.vida) {
                clearInterval(tiraVida)
            } else {
                cont--
            }
        }, 50)

        if (verifica(player, monstro)) {
            const imgMonstro = document.querySelector('.containerMonstro img')
            imgMonstro.classList.add('animacaoMorrer')
        }

        // Proxima ação
        footer.addEventListener('click', () => {
            if (verifica(player, monstro)) {
                playerWins(player, monstro, footer)
            } else {
                vezDoMonstro(player, monstro, footer)
            }
        })
    })
}

function verifica(player, monstro) {
    // Verifica se alguem venceu
    if (player.vida == 0 || monstro.vida == 0) return true
    return false
}

function playerWins(player, monstro, footer) {
    // Remove a animação de bater no monstro para ser usada novamente mais pra frente
    const imgPlayer = document.querySelector('.containerPlayer img')
    imgPlayer.classList.remove('baterNoMonstro')

    // Remove os EventListner
    const body = document.querySelector('body')
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)

    // Declarando player como vencedor
    footer.innerHTML = `${player.nome} venceu a batalha contra o ${monstro.nome}!!!`
    writer(footer)

    // Retorna a vida do player ao maximo
    player.retornaVida()

    // Recebendo XP
    footer.addEventListener('click', () => recebeXp(player, monstro, footer))
}

function recebeXp(player, monstro, footer) {
    // Remove os EventListner
    const body = document.querySelector('body')
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)

    // Declara o quanto de Xp o usuario recebeu
    footer.innerHTML = player.recebeXp(monstro.exp)
    writer(footer)

    // Volta para o menu
    footer.addEventListener('click', () => menu(player))
}

function vezDoMonstro(player, monstro, footer) {
    // Remove os EventListner
    const body = document.querySelector('body')
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)

    // Tira a animação de bater no Player para ser usada novamente mais pra frente
    const imgPlayer = document.querySelector('.containerPlayer img')
    imgPlayer.classList.remove('baterNoMonstro')

    // Recebe a vida de antes de bater
    let cont = player.vida

    // Escolhe um poder aleatório dos poderes que o monstro tem
    const random = getRandomPower(0, monstro.powers.length - 1).toFixed(0)
    const titlePower = monstro.powers[random].title
    footer.innerHTML = monstro.powers[random].funcao(player, titlePower)
    const imgMonstro = document.querySelector('.containerMonstro img')
    imgMonstro.classList.add('baterNoPlayer')
    writer(footer)
    const vidaPlayer = document.querySelector('.vidaPlayer')
    const pVidaPlayer = document.querySelector('.vidaTotalPlayer p')
    const tiraVida = setInterval(() => {
        console.log(cont)
        vidaPlayer.style.width = `${cont/player.vidaMax * 100}%`
        pVidaPlayer.innerHTML = `${Math.ceil(cont)}/${player.vidaMax}`
        if (cont <= player.vida) {
            clearInterval(tiraVida)
        } else {
            cont--
        }
    }, 50)

    if (verifica(player, monstro)) {
        const imgPlayer = document.querySelector('.containerPlayer img')
        imgPlayer.classList.add('animacaoMorrer')
    }

    footer.addEventListener('click', () => verifica(player, monstro) ? monsterWins(player, monstro, footer) : vezDoPlayer(player, monstro, footer))
}

function vezDoPlayer(player, monstro, footer) {
    const imgMonstro = document.querySelector('.containerMonstro img')
    imgMonstro.classList.remove('baterNoPlayer')
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
    return Math.random() * (max - min) + min;
}

luta(new Warrior('Guerreiro', 'Guiry', '19'), new Slime())