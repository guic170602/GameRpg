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
    const historiaAraay = [
        'Em todos os universos o mal sempre luta contra o bem, somente um herói é capaz de poder confrontar as ameaças que surgem para sucumbir a ordem. Com uma grande ameaça iminente os deuses trouxeram você para o nosso mundo para que você pudesse derrotar uma força maligna, porém suas memórias foram roubadas por um ser malicioso que busca dominar todo o planeta. Você acordou confuso em um campo verdejante... com dificuldade para lembrar do seu passado, só lembrando da sua origem, sem saber o que fazer, você começou a andar até que encontrou um pequeno lago, nele você conseguiu ver o seu reflexo.'
    ]
    imgNewGame.addEventListener('click', () => {
        audio()
        historia('', escolhaClasse, '', historiaAraay)
    })
    div.appendChild(imgNewGame)
    main.appendChild(div)
})()