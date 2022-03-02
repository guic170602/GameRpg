function mage(valorNome, valorIdade) {
    const mage = document.createElement('div')
    mage.classList.add('class')
    mage.classList.add('mageDiv')
    const mageTitle = document.createElement('h2')
    mageTitle.innerHTML = 'Mago'
    mageTitle.classList.add('titleClass')
    const imgClass = document.createElement('img')
    imgClass.classList.add('imgClass')
    imgClass.src = ('./src/img/classes/mage.png')
    const divInfo = document.createElement('div')
    divInfo.classList.add('containerInfoClass')
    const mageInfo = document.createElement('p')
    mageInfo.innerHTML = 'Especialista em magias de longa distância, pode causar uma grande quantidide de dano em área.'
    mageInfo.classList.add('info')
    const mageButton = document.createElement('button')
    mageButton.innerHTML += 'Escolha'
    mageButton.classList.add('buttonMage')
    divInfo.appendChild(mageInfo)
    mageButton.addEventListener('click', () => cliqueDeEscolha(mage, formulario, ['Mago', valorNome, valorIdade]))
    mage.appendChild(mageTitle)
    mage.appendChild(imgClass)
    mage.appendChild(divInfo)
    mage.appendChild(mageButton)
    mage.style.animation = 'fadeIn 1s 1 ease 0s both'
    return mage
}

function warrior(valorNome, valorIdade) {
    const warrior = document.createElement('div')
    warrior.classList.add('class')
    warrior.classList.add('warriorDiv')
    const warriorTitle = document.createElement('h2')
    warriorTitle.innerHTML = 'Guerreiro'
    warriorTitle.classList.add('titleClass')
    const imgClass = document.createElement('img')
    imgClass.classList.add('imgClass')
    imgClass.src = ('./src/img/classes/warrior.png')
    const divInfo = document.createElement('div')
    divInfo.classList.add('containerInfoClass')
    const warriorInfo = document.createElement('p')
    warriorInfo.innerHTML = 'Proficiente em combates de curta distância, causa dano físico considerável sendo dono de uma grande defesa.'
    warriorInfo.classList.add('info')
    divInfo.appendChild(warriorInfo)
    const warriorButton = document.createElement('button')
    warriorButton.innerHTML += 'Escolha'
    warriorButton.classList.add('buttonWarrior')
    warriorButton.addEventListener('click', () => cliqueDeEscolha(warrior, formulario, ['Guerreiro', valorNome, valorIdade]))
    warrior.appendChild(warriorTitle)
    warrior.appendChild(imgClass)
    warrior.appendChild(divInfo)
    warrior.appendChild(warriorButton)
    warrior.style.animation = 'fadeIn 1s 1 ease 0.2s both'
    return warrior
}

function assassin(valorNome, valorIdade) {
    const assassin = document.createElement('div')
    assassin.classList.add('class')
    assassin.classList.add('assassinDiv')
    const assassinTitle = document.createElement('h2')
    assassinTitle.innerHTML = 'Assassino'
    assassinTitle.classList.add('titleClass')
    const divInfo = document.createElement('div')
    divInfo.classList.add('containerInfoClass')
    const assassinInfo = document.createElement('p')
    assassinInfo.innerHTML = 'Mestre das sombras, age fora da visão de seus oponentes, sendo extremamente letal com seus ataques surpresa.'
    assassinInfo.classList.add('info')
    divInfo.appendChild(assassinInfo)
    const assassinButton = document.createElement('button')
    assassinButton.innerHTML += 'Escolha'
    assassinButton.classList.add('buttonAssassin')
    assassinButton.addEventListener('click', () => cliqueDeEscolha(assassin, formulario, ['Assassino', valorNome, valorIdade]))
    assassin.appendChild(assassinTitle)
    assassin.appendChild(divInfo)
    assassin.appendChild(assassinButton)
    assassin.style.animation = 'fadeIn 1s 1 ease 0.4s both'
    return assassin
}

function archer(valorNome, valorIdade) {
    const archer = document.createElement('div')
    archer.classList.add('class')
    archer.classList.add('archerDiv')
    const archerTitle = document.createElement('h2')
    archerTitle.innerHTML = 'Arqueiro'
    archerTitle.classList.add('titleClass')
    const divInfo = document.createElement('div')
    divInfo.classList.add('containerInfoClass')
    const archerInfo = document.createElement('p')
    archerInfo.innerHTML = 'Perito no combate com armas a distância, o arqueiro se mostra efetivo quando se trata de dano ao longo do tempo.'
    archerInfo.classList.add('info')
    const archerButton = document.createElement('button')
    archerButton.innerHTML += 'Escolha'
    archerButton.classList.add('buttonArcher')
    archerButton.addEventListener('click', () => cliqueDeEscolha(archer, formulario, ['Arqueiro', valorNome, valorIdade]))
    divInfo.appendChild(archerInfo)
    archer.appendChild(archerTitle)
    archer.appendChild(divInfo)
    archer.appendChild(archerButton)
    archer.style.animation = 'fadeIn 1s 1 ease 0.6s both'
    return archer
}

function escolhaClasse(valorNome = '', valorIdade = '') {
    const main = document.querySelector('main')
    footer = document.querySelector('footer')
    const div = document.createElement('div')
    div.classList.add('containerClasses')
    main.innerHTML = ''
    footer.innerHTML = 'Escolha a sua classe:'
    writer(footer)
    div.appendChild(mage(valorNome, valorIdade))
    div.appendChild(warrior(valorNome, valorIdade))
    div.appendChild(assassin(valorNome, valorIdade))
    div.appendChild(archer(valorNome, valorIdade))
    main.appendChild(div)
}

function formulario(classe, valorNome, valorIdade) {
    const main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = `Você escolheu ${classe}. Nos diga seu nome e idade`
    writer(footer)
    const form = document.createElement('form')
    const labelName = document.createElement('label')
    labelName.for = 'name'
    labelName.innerHTML = 'Nome:'
    form.appendChild(labelName)
    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'name'
    inputName.id = 'name'
    inputName.autocomplete = "off"
    inputName.value = valorNome
    form.appendChild(inputName)
    const labelIdade = document.createElement('label')
    labelIdade.for = 'idade'
    labelIdade.innerHTML = 'Idade:'
    form.appendChild(labelIdade)
    const inputIdade = document.createElement('input')
    inputIdade.type = 'number'
    inputIdade.name = 'idade'
    inputIdade.id = 'idade'
    inputIdade.value = valorIdade
    form.appendChild(inputIdade)
    const submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = 'Enviar'
    submit.classList.add('enviar')
    form.appendChild(submit)
    main.appendChild(form)
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        sair(form, posFormulario, [classe, inputName.value, inputIdade.value])
    })
}

function posFormulario(classe, nome, idade) {
    const main = document.querySelector('main')
    let footer = document.querySelector('footer')
    main.innerHTML = ''
    footer.innerHTML = `Você inseriu essas informações. Tem certeza?`
    writer(footer)
    const player = escolhaPlayer(classe, nome, idade)
    main.appendChild(divInfo(player))
}

function escolhaPlayer(classe, nome, idade) {
    if (classe.toLowerCase() === 'mago') {
        return new Mage(classe, nome, idade)
    } else if (classe.toLowerCase() === 'guerreiro') {
        return new Warrior(classe, nome, idade)
    } else if (classe.toLowerCase() === 'guerreiro') {
        return new Assassin(classe, nome, idade)
    } else {
        return new Archer(classe, nome, idade)
    }

}

function divInfo(player) {
    const div = document.createElement('div')
    div.classList.add('containerConfirmacao')
    const pClasse = document.createElement('p')
    pClasse.innerHTML = `A classe escolhida foi: ${player.classe}`
    pClasse.classList.add('informacoes')
    div.appendChild(pClasse)
    const pNome = document.createElement('p')
    pNome.innerHTML = `O nome inserido foi: ${player.nome}`
    pNome.classList.add('informacoes')
    div.appendChild(pNome)
    const pIdade = document.createElement('p')
    pIdade.innerText = `A idade do jogador é: ${player.idade}`
    pIdade.classList.add('informacoes')
    div.appendChild(pIdade)
    const img = document.createElement('img')
    img.src = player.img
    img.classList.add('imgClass')
    div.appendChild(img)
    const sim = document.createElement('button')
    const nao = document.createElement('button')
    sim.innerHTML = 'Sim'
    nao.innerHTML = 'Não'
    const decisao = document.createElement('div')
    sim.id = 'sim'
    nao.id = 'nao'
    const historiaArray = ['No seu bolso você encontrou um bilhete que tinha escrito "É preciso passar pelos desafios para relembrar" Você olha aquele papel com atenção e sem entender se aquilo pode realmente ser verdade, mas chega na conclusão que sua única saída é se submeter aos desafios. Atrás do papel tinha um mapa, que mostrava o caminho para o seu futuro.']
    sim.addEventListener('click', () => sair(div, historia, [player, menu, '', historiaArray]))
    nao.addEventListener('click', () => sair(div, escolhaClasse, [player.nome, player.idade]))
    decisao.appendChild(sim)
    decisao.appendChild(nao)
    div.appendChild(decisao)
    return div
}

// escolhaClasse()