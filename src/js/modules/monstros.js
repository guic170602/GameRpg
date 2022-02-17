class Monstros {
    constructor() {

    }
    get vida() {
        return this._vida
    }

    set vida(valor) {
        this._vida + valor >= 0 ? this._vida += valor : this._vida = 0
    }
}

class Slime extends Monstros {
    constructor() {
        super()
        this.img = './src/img/monstros/Monstro1.png'
        this.nome = 'Slime'
        this.vidaMax = 100
        this._vida = 100
        this.defense = 10
        this.atack = 15
        this.exp = 100
        this.powers = [{
                title: 'Ataque Direto',
                funcao: (playerAux, title) => this.ataqueDireto(playerAux, title)
            },
            {
                title: 'Chicote das Sombras',
                funcao: (playerAux, title) => this.chicotedasSombras(playerAux, title)
            }
        ]
    }

    ataqueDireto(target, title) {
        let damage = this.atack
        if (damage - target.defense > 0) {
            target.vida = -(damage - target.defense)
            damage -= target.defense
            return `${this.nome} usou ${title} e você rececebeu ${damage} de dano!!`
        }
    }

    chicotedasSombras(target, title) {
        let damage = this.atack
        target.vida = -damage
        return `${this.nome} usou ${title} e você rececebeu ${damage} de dano!!`
    }
}

class Goblin extends Monstros {
    constructor() {
        super()
        this.img = './src/img/monstros/Goblin.png'
        this.nome = 'Goblin'
        this.vidaMax = 250
        this._vida = 250
        this.defense = 18
        this.atack = 27
        this.exp = 200
        this.powers = [{
                title: 'Descontrole',
                funcao: (playerAux, title) => this.descontrole(playerAux, title)
            },
            {
                title: 'Cabeçada',
                funcao: (playerAux, title) => this.cabecada(playerAux, title)
            },
            {
                title: 'Alquimia',
                funcao: (playerAux, title) => this.alquimia(playerAux, title)
            }

        ]
    }

    descontrole(target, title) {
        let damage = this.atack
        if (damage - target.defense > 0) {
            target.vida = -(damage - target.defense)
            damage -= target.defense
            return `${this.nome} usou ${title} e você rececebeu ${damage} de dano!!`
        }
    }

    cabecada(target, title) {
        let damage = Math.ceil(this.atack + (10 * this.atack / 100))
        if (damage - target.defense > 0) {
            target.vida = -(damage - target.defense)
            damage -= target.defense
            return `${this.nome} usou ${title} e você rececebeu ${damage} de dano!!`
        }
    }

    alquimia(target, title) {
        let damage = this.atack
        target.vida = -damage
        return `${this.nome} usou ${title} e você rececebeu ${damage} de dano!!`
    }
}