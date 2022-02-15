function writer(element) {
    const arr = element.innerHTML.split('')
    element.innerHTML = ''
    let i = 0
    let stop = false
    const p = document.createElement('p')
    p.innerHTML = ">>"
    p.classList.add('passar')
    const html = document.querySelector('html')
    const time = setInterval(() => {
        element.innerHTML += arr[i]
        html.addEventListener('click', () => {
            clearInterval(time)
            element.innerHTML = ''
            stop = true
            if (stop) element.innerHTML = arr.join('')
            element.appendChild(p)
        })
        if(i === arr.length - 1){
            element.appendChild(p)
        }
        stop = false
        if (i < arr.length - 1) i++
        else clearInterval(time)
    }, 75)
}