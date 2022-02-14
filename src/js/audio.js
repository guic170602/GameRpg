function audio(){
    const music = document.getElementById('audio')
    const html = document.querySelector('html')
    html.addEventListener('click', () => {
        music.play();
        music.loop =true;
        html.addEventListener('mouseleave', () => music.pause())
        html.addEventListener('click', () => music.play())
    })
}