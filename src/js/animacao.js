function writer(element){
    arr = element.innerHTML.split('')
    element.innerHTML = ''
    arr.forEach((letra, i) => {
        setTimeout(() => element.innerHTML+=letra, 75 * i)
    })
}