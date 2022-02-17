class Player {
    constructor(classe, nome, idade) {
        this.classe = classe
        this.nome = nome
        this.idade = idade
        this.level = 1
        this.levelMax = 10
        this._vida = 100
        this.vidaMax = 100
        this._mana = 60
        this._exp = 0
        this._passar = 100
        this.defense = 10
        this.phisAttack = 15
        this.magicAttack = 15
        this.atacks = [{
            title: 'Ataque Basico',
            funcao: monstroAux => this.ataqueBasico(monstroAux)
        }]
    }

    get passar() {
        return this._passar
    }

    set passar(value) {
        this._passar = value
    }

    get exp() {
        return this._exp
    }

    set exp(valor) {
        this._exp = valor
    }

    get vida() {
        return this._vida
    }

    set vida(valor) {
        if (valor >= this.vidaMax) this._vida = valor
        else this._vida += valor

    }

    get mana() {
        return this._mana
    }

    set mana(valor) {
        this._mana -= valor
    }

    retornaVida() {
        this.vida = this.vidaMax
    }

    ataqueBasico(target) {
        let damage = this.phisAttack
        if (damage - target.defense > 0) {
            target.vida = -(damage - target.defense)
            damage -= target.defense
            return `${target.nome} rececebeu ${damage} de dano!!`
        }
    }

    recebeXp(value) {
        let string = ''
            // Verifica quanto falta para passar de nivel
        let paraPassar = this.passar - this.exp
            // Pegamos o resultado da subtração de quanto falta pra passar e valor de xp recebido
        this.exp += value
        console.log('Falta ' + paraPassar + ' para passar de nivel;')
        console.log('O valor de Xp recebido foi: ', value)
        console.log('Falta ' + (this.passar - this.exp) + ' para upar')
        const levelAtual = this.level
            // Verifica se quantidade de xp ganha é suficiente para passar de nivel
        while (this.passar - this.exp <= 0) {
            this.passarNivel()
            string = `Voce passou para o nivel ${this.level}!! `
                // Ao passar de nivel temos que acrescentar a quantidade de xp que sera nescessario para passar para o proximo nivel
                // console.log('Passou!! Falta agora ' + resto + ' para passar')
        }
        // A quantidade de exp que o usuario tem de acordo com a quantidade de xp que recebeu
        if (levelAtual == this.level) {
            string = `Falta ${this.passar - this.exp}xp para passar de nivel`
        }
        return string
    }
}