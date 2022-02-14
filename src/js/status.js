function status (player) {
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = `Estes são seus status atualmente`
    writer(footer)
    const div = document.createElement('div')
    div.classList.add('containerStatus')
    const h2 = document.createElement('h2')
    const fechar = document.createElement('button')
    fechar.classList.add('fechar')
    fechar.addEventListener('click', () => menu(player))
    div.appendChild(fechar)
    h2.innerHTML = 'Status'
    div.appendChild(h2)
    const pClasse = document.createElement('p')
    pClasse.innerHTML = 'Clase: ' + player.classe
    div.appendChild(pClasse)
    const pNome = document.createElement('p')
    pNome.innerHTML = 'Nome: ' + player.nome
    div.appendChild(pNome)
    const pIdade = document.createElement('p')
    pIdade.innerHTML = 'Idade: ' + player.idade
    div.appendChild(pIdade)
    const pLevel = document.createElement('p')
    pLevel.innerHTML = 'Level: ' + player.levelAtual
    div.appendChild(pLevel)
    const pLife = document.createElement('p')
    pLife.innerHTML = 'Vida: ' + player.life
    div.appendChild(pLife)
    const pMana = document.createElement('p')
    pMana.innerHTML = 'Mana: ' + player.mana
    div.appendChild(pMana)
    const pDefense = document.createElement('p')
    pDefense.innerHTML = 'Defesa: ' + player.defense
    div.appendChild(pDefense)
    const pPhisAttack = document.createElement('p')
    pPhisAttack.innerHTML = 'Ataque Fisico: ' + player.phisAttack
    div.appendChild(pPhisAttack)
    const pMagicAttack = document.createElement('p')
    pMagicAttack.innerHTML = 'Ataque Magico: ' + player.magicAttack
    div.appendChild(pMagicAttack)
    const pPassar = document.createElement('p')
    pPassar.innerHTML = 'Falta ' + player.passar + 'xp para passar de nivel'
    div.appendChild(pPassar)
    const pAtacks = document.createElement('p')
    pAtacks.innerHTML = 'Ataques'
    const listaAtacks = document.createElement('ul')
    player.atacks.forEach(attack => {
        const li = document.createElement('li')
        li.innerHTML = attack.title
        listaAtacks.appendChild(li)
    })
    div.appendChild(listaAtacks)
    main.appendChild(div)
}