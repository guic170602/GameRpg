function menu(player){
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)
    footer.innerHTML = `Ola ${player.nome}. Selecione o que deseja fazer!`
    writer(footer)
    const div = document.createElement('div')
    div.classList.add('conteinerMenu')
    const h2 = document.createElement('h2')
    h2.innerHTML = 'Menu'
    div.appendChild(h2)
    const buttonDungeon = document.createElement('button')
    buttonDungeon.innerHTML = 'Entrar na Dungeon'
    buttonDungeon.id = 'dungeon'
    buttonDungeon.addEventListener('click', () => dungeon(player))
    div.appendChild(buttonDungeon)
    const buttonStatus = document.createElement('button')
    buttonStatus.innerHTML = 'Ver status'
    buttonStatus.id = 'status'
    buttonStatus.addEventListener('click', () => status(player))
    div.appendChild(buttonStatus)
    const buttonReset = document.createElement('button')
    buttonReset.innerHTML = 'Voltar do zero'
    buttonReset.id = 'reset'
    buttonReset.addEventListener('click', () => principal())
    div.appendChild(buttonReset)
    main.appendChild(div)
}