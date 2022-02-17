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