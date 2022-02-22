function treinar(player) {
    const main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = `Selecione um monstro para treinar`
    writer(footer)
    const div = document.createElement('div')
    div.classList.add('containerTreino')
    const fechar = document.createElement('button')
    fechar.classList.add('fechar')
    let contFechar = 1
    fechar.addEventListener('click', () => sair(div, menu, player))
    div.appendChild(fechar)
    const h2 = document.createElement('h2')
    h2.innerHTML = 'Treino'
    div.appendChild(h2)
    console.log(player.monstros)
    const monstrosCompletos = player.monstros.filter(monstro => monstro.completed)
    console.log(monstrosCompletos)
    if (monstrosCompletos.length > 0) {
        monstrosCompletos.forEach(monstro => {
            const buttonMonstro = document.createElement('button')
            buttonMonstro.id = monstro.nome.toLowerCase()
            const fase = document.createElement('p')
            fase.innerHTML = `${monstro.fase}`
            const cidade = document.createElement('p')
            cidade.innerHTML = monstro.cidade
            buttonMonstro.appendChild(fase)
            buttonMonstro.appendChild(cidade)
            buttonMonstro.addEventListener('click', () => luta(player, monstro.monstro))
            div.appendChild(buttonMonstro)
        });
    } else {
        const nada = document.createElement('h3')
        nada.innerHTML = 'Por enquanto não há treino, vá para o modo Historia'
        div.appendChild(nada)
    }
    main.appendChild(div)
}

// treinar(new Warrior('Guerreiro', 'Guiry', 19))