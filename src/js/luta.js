function luta(player,monstro){
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = `Voce esta lutando contra o ${monstro.nome} escolha um ataque`
    writer(footer)
    const div = document.createElement('div')
    div.classList.add('containerLuta')
    const divAtacks = document.createElement('div')
    player.atacks.forEach(atack => {
        const buttonAtack = document.createElement('button')
        buttonAtack.innerHTML = atack.title
        addEvent(buttonAtack, footer, player, monstro)
        buttonAtack.classList.add('ataques')
        divAtacks.appendChild(buttonAtack)
    })
    div.appendChild(divAtacks)
    main.appendChild(div)
}

function addEvent(buttonAtack, footer, player, monstro){
    buttonAtack.addEventListener('click', () => {
        if(buttonAtack.innerHTML.toLowerCase() === 'ataque basico'){
            footer.innerHTML = player.ataqueBasico(monstro)
            writer(footer)
        }
        if(buttonAtack.innerHTML.toLowerCase() === 'bola de fogo'){
            footer.innerHTML = player.bolaDeFogo(monstro)
            writer(footer)
        }
    })
}