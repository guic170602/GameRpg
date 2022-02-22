function historia(player, funcao, monstro, historiaArray, cont = 0) {
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = ''
    const divFooter = document.createElement('div')
    divFooter.classList.add('containerFooter')
    divFooter.innerHTML = `Presione aqui para continuar!!`
    writer(divFooter)
    footer.appendChild(divFooter)
    const div = document.createElement('div')
    main.appendChild(div)
    div.classList.add('containerHistoria')
    div.innerHTML = historiaArray[cont]
    writer(div)
    cont += 1
    divFooter.addEventListener('click', () => cont < historiaArray.length ? historia(player, funcao, monstro, historia, cont) : funcao(player, monstro))
}

// apos(new Warrior('Guerreiro', 'Guiry', '19'), new Slime())