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
        return this._passar - this.exp
    }

    get exp() {
        return this._exp
    }

    set exp(valor) {
        this._exp += valor
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
            return `${target.nome} rececebeu ${damage} de dano e esta com ${target.vida} vida`
        }
    }

    recebeXp(value) {
        let string = ''
        while (value >= this._passar) {
            this.exp = value
            this.passarNivel()
            string = `Voce passou para o nivel ${this.level}!! `
            value -= this._passar
            this.recebeXp(value)
        }

        this.exp += value
        string += `Falta agora ${this.passar}xp para passar de nivel`

        return string
    }

    passarNivel() {
        this.level++
            this._exp = 0
    }
}


class Mage extends Player {
    constructor(classe, nome, idade) {
        super(classe, nome, idade)
        this.img = './src/img/mage.png'
        this._vida = 80
        this.vidaMax = 80
        this.defense = 5
        this._mana = 120
        this.phisAttack = 10
        this.magicAttack = 25
        this.atacks = [{
                title: 'Ataque Basico',
                funcao: monstroAux => this.ataqueBasico(monstroAux)
            },
            {
                title: 'Bola de Fogo',
                funcao: monstroAux => this.bolaDeFogo(monstroAux)
            }
        ]
    }
    bolaDeFogo(target) {
        const damage = this.magicAttack

        if (this.mana <= 0) {
            return 'Mana insuficiente'
        } else {
            target.vida = -damage
            this.mana = 13
            return `${target.nome} recebeu ${damage} de dano e esta com ${target.vida} vida e ficou com ${this.mana} de mana`
        }
    }

}

class Warrior extends Player {
    constructor(classe, nome, idade) {
        super(classe, nome, idade)
        this.img = './src/img/warrior.png'
        this._vida = 110
        this.vidaMax = 110
        this.defense = 10
        this.phisAttack = 25
        this.magicAttack = 5
    }
}

class Assassin extends Player {
    constructor(classe, nome, idade) {
        super(classe, nome, idade)
        this.img = './src/img/assassin.png'
    }
}

class Archer extends Player {
    constructor(classe, nome, idade) {
        super(classe, nome, idade)
        this.img = './src/img/archer.png'
    }
}