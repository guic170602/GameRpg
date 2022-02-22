(function() {
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    footer.innerHTML = 'Todos os direitos reservados'
    const div = document.createElement('div')
    div.classList.add('containerPrincipal')
    const imgPrincipal = document.createElement('img')
    imgPrincipal.src = './src/img/inicio.png'
    imgPrincipal.classList.add('imgPrincipal')
    div.appendChild(imgPrincipal)
    const imgNewGame = document.createElement('img')
    imgNewGame.src = './src/img/newGame.png'
    imgNewGame.classList.add('newGame')
    imgNewGame.addEventListener('click', () => escolhaClasse())
    div.appendChild(imgNewGame)
    main.appendChild(div)
})()