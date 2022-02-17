class Slime extends Monstros {
    constructor() {
        super()
        this.img = './src/img/monstros/Slime.png'
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