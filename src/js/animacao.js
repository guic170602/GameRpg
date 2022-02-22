function writer(footer) {
    const arr = footer.innerHTML.split('')
    const element = document.createElement('p')
    element.classList.add('textoAnimado')
    footer.innerHTML = ''
    footer.appendChild(element)
    let i = 0
    let stop = false
    const p = document.createElement('p')
    p.innerHTML = ">>"
    p.classList.add('passar')
    footer.appendChild(p)
    const html = document.querySelector('html')
    const time = setInterval(() => {
        element.innerHTML += arr[i]
        html.addEventListener('click', () => {
            clearInterval(time)
            element.innerHTML = ''
            stop = true
            if (stop) element.innerHTML = arr.join('')
        })
        stop = false
        if (i < arr.length - 1) i++
            else clearInterval(time)
    }, 75)
}

function sair(div, funcao, player) {
    div.style.animation = 'popOut 1s forwards'
    const animacao = setInterval(() => {
        if (Array.isArray(player)) {
            funcao(...player)
        } else {
            funcao(player)
        }
        clearInterval(animacao)
    }, 1000)
}

function cliqueDeEscolha(div, funcao, player) {
    const divInfo = document.querySelector(`.${div.classList[1]} .containerInfoClass`)
    divInfo.classList.remove('containerInfoClass')
    const notDiv = document.querySelectorAll(`.containerClasses> :not(.${div.classList[1]})`)
    notDiv.forEach(divs => divs.style.display = 'none')
    div.style.animation = 'rodar 1s, aumentar 1s forwards, fadeOut 1.2s'
    const animacao = setInterval(() => {
        if (Array.isArray(player)) {
            funcao(...player)
        } else {
            funcao(player)
        }
        clearInterval(animacao)
    }, 1100)
}