function antes(player, monstro) {
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)
    footer.innerHTML = `Presione aqui para continuar!!`
    writer(footer)
    const div = document.createElement('div')
    main.appendChild(div)
    div.classList.add('containerHistoria')
    div.innerHTML = monstro.antes
    writer(div)
    footer.addEventListener('click', () => luta(player, monstro))
}

function apos(player, monstro) {
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.remove()
    footer = document.createElement('footer')
    body.appendChild(footer)
    footer.innerHTML = `Presione aqui para continuar!!`
    writer(footer)
    const div = document.createElement('div')
    main.appendChild(div)
    div.classList.add('containerHistoria')
    div.innerHTML = monstro.pos
    writer(div)
    footer.addEventListener('click', () => menu(player, monstro))
}

// antes(new Warrior('Guerreiro', 'Guiry', '19'), new Slime())