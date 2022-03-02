function creditos(player) {
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = ''
    divFooter = document.createElement('div')
    divFooter.innerHTML = 'Os criadores:'
    writer(divFooter)

    const div = document.createElement('div')
    div.classList.add('containerContato')

}