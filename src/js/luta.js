function luta(player, monstro) {
    const main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = `Voce esta lutando contra o ${monstro.nome} escolha um ataque`
    writer(footer)

    const div = document.createElement('div')
    div.classList.add('containerLuta')

    const divLuta = document.createElement('div')
    divLuta.classList.add('divLuta')

    const divTurno = document.createElement('div')
    divTurno.classList.add('containerTurno')
    divTurno.innerHTML = 'Turno '
    const spanTurno = document.createElement('span')
    spanTurno.innerHTML = '1'
    let turno = 1
    divTurno.appendChild(spanTurno)
    divLuta.appendChild(divTurno)

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
        powerTitle = document.createElement('p')
        powerTitle.innerHTML = atack.title
        imgPower = document.createElement('img')
        imgPower.src = atack.imgPower
        imgPower.style.height = '30px'
        buttonAtack.appendChild(powerTitle)
        buttonAtack.appendChild(imgPower)
        addEvent(buttonAtack, player, atack, monstro, turno)
        buttonAtack.classList.add('ataques')
        buttonAtack.style.backgroundColor = atack.color
        divAtacks.appendChild(buttonAtack)
    })
    div.appendChild(divLuta)
    div.appendChild(divAtacks)
    main.appendChild(div)
}

function addEvent(buttonAtack, player, atack, monstro, turno) {
    buttonAtack.addEventListener('click', () => {
        const footer = document.querySelector('footer')
        footer.innerHTML = ''
        divFooter = document.createElement('div')
        divFooter.classList.add('containerFooter')
        footer.appendChild(divFooter)

        // Escondendo os Golpes
        const divAtacks = document.querySelector('.golpes')
        divAtacks.style.transform = 'translate(-3000px, 0)'

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
        divFooter.innerHTML = atack.funcao(monstro)
        writer(divFooter)

        // Animação do Monstro
        const animaDepoisDaPorrada = setInterval(() => {
            verifica(player, monstro) ? imgMonstro.classList.add('animacaoMorrer') : imgMonstro.classList.add('tomarPorrada')
            const vidaMonstro = document.querySelector('.vidaMonstro')
            const pVidaMonstro = document.querySelector('.vidaTotalMonstro p')
            const tiraVida = setInterval(() => {
                vidaMonstro.style.width = `${cont/monstro.vidaMax * 100}%`
                pVidaMonstro.innerHTML = `${cont}/${monstro.vidaMax}`
                if (cont <= monstro.vida) {
                    clearInterval(tiraVida)
                } else {
                    cont--
                }
            }, 50)
            clearInterval(animaDepoisDaPorrada)
        }, 500)


        // Proxima ação
        divFooter.addEventListener('click', () => verifica(player, monstro) ? playerWins(player, monstro) : vezDoMonstro(player, monstro, turno))
    })
}


// Verifica se alguem venceu

const verifica = (player, monstro) => (player.vida == 0 || monstro.vida == 0)

function playerWins(player, monstro) {
    // Declarando player como vencedor
    const footer = document.querySelector('footer')
    footer.innerHTML = ''
    divFooter = document.createElement('div')
    divFooter.classList.add('containerFooter')
    footer.appendChild(divFooter)
    divFooter.innerHTML = `${player.nome} venceu a batalha contra o ${monstro.nome}!!!`
    writer(divFooter)

    const monstroDerrotado = player.monstros.map(monstro => monstro.nome).indexOf(monstro.nome)
    player.monstros[monstroDerrotado].completed = true

    // Recebendo XP
    divFooter.addEventListener('click', () => recebeXp(player, monstro))
}

function recebeXp(player, monstro) {
    const footer = document.querySelector('footer')
    footer.innerHTML = ''
    divFooter = document.createElement('div')
    divFooter.classList.add('containerFooter')
    footer.appendChild(divFooter)

    // Declara o quanto de Xp o usuario recebeu
    divFooter.innerHTML = player.recebeXp(monstro.exp)
    writer(divFooter)


    //Retorna a vida apois a luta
    player.retornaVida()

    // Volta para o menu
    divFooter.addEventListener('click', () => historia(player, menu, monstro, monstro.pos))
}

function vezDoMonstro(player, monstro, turno) {
    const footer = document.querySelector('footer')
    footer.innerHTML = ''
    divFooter = document.createElement('div')
    divFooter.classList.add('containerFooter')
    footer.appendChild(divFooter)

    // Tira a animação de bater no Player para ser usada novamente mais pra frente
    const imgPlayer = document.querySelector('.containerPlayer img')
    imgPlayer.classList.remove('baterNoMonstro')

    // Recebe a vida de antes de bater
    let cont = player.vida

    // Escolhe um poder aleatório dos poderes que o monstro tem
    const random = getRandomPower(0, (monstro.powers.length - 1))
    const titlePower = monstro.powers[random].title
    divFooter.innerHTML = monstro.powers[random].funcao(player, titlePower)
    writer(divFooter)

    const imgMonstro = document.querySelector('.containerMonstro img')
    imgMonstro.classList.remove('tomarPorrada')
    imgMonstro.classList.add('baterNoPlayer')


    const animaDepoisDaPorrada = setInterval(() => {
        verifica(player, monstro) ? imgPlayer.classList.add('animacaoMorrer') : imgPlayer.classList.add('tomarPorrada')
        const vidaPlayer = document.querySelector('.vidaPlayer')
        const pVidaPlayer = document.querySelector('.vidaTotalPlayer p')
        const tiraVida = setInterval(() => {
            vidaPlayer.style.width = `${cont/player.vidaMax * 100}%`
            pVidaPlayer.innerHTML = `${Math.ceil(cont)}/${player.vidaMax}`
            cont <= player.vida ? clearInterval(tiraVida) : cont--
        }, 50)
        clearInterval(animaDepoisDaPorrada)
    }, 500)



    divFooter.addEventListener('click', () => verifica(player, monstro) ? monsterWins(player, monstro) : vezDoPlayer(player, monstro, turno))
}

function monsterWins(player, monstro) {
    const footer = document.querySelector('footer')
    footer.innerHTML = ''
    divFooter = document.createElement('div')
    divFooter.classList.add('containerFooter')
    footer.appendChild(divFooter)

    // Declarando monstro como vencedor
    divFooter.innerHTML = `${monstro.nome} te derrotou, vá treinar e volte para tentar novamente!!!`
    writer(divFooter)


    //Retorna a vida apos a luta
    player.retornaVida()

    divFooter.addEventListener('click', () => menu(player))
}


function vezDoPlayer(player, monstro, turno) {
    const imgMonstro = document.querySelector('.containerMonstro img')
    imgMonstro.classList.remove('baterNoPlayer')

    turno++
    const spanTurno = document.querySelector('.containerTurno span')
    spanTurno.innerHTML = turno


    console.log(turno)

    const imgPlayer = document.querySelector('.containerPlayer img')
    imgPlayer.classList.remove('tomarPorrada')

    const footer = document.querySelector('footer')
    footer.innerHTML = ''
    divFooter = document.createElement('div')
    divFooter.classList.add('containerFooter')
    footer.appendChild(divFooter)

    divFooter.innerHTML = 'Sua vez novamente, escolha um ataque:'
    writer(divFooter)
    const divAtacks = document.querySelector('.golpes')
    divAtacks.style.transform = 'translate(0, 0)'
    divAtacks.innerHTML = ''
    player.atacks.forEach(atack => {
        const buttonAtack = document.createElement('button')
        powerTitle = document.createElement('p')
        powerTitle.innerHTML = atack.title
        imgPower = document.createElement('img')
        imgPower.src = atack.imgPower
        imgPower.style.height = '30px'
        buttonAtack.appendChild(powerTitle)
        buttonAtack.appendChild(imgPower)
        addEvent(buttonAtack, player, atack, monstro, turno)
        buttonAtack.classList.add('ataques')
        buttonAtack.style.backgroundColor = atack.color
        divAtacks.appendChild(buttonAtack)
    })
}

const getRandomPower = (min, max) => (Math.random() * (max - min) + min).toFixed()

// luta(new Warrior('Guerreiro', 'Guiry', '19'), new Slime())