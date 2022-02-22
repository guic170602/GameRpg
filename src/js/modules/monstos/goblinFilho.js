class GoblinFilho extends Monstros {
    constructor() {
        super('./src/img/monstros/Goblin.png',
            'Goblin', 250, 250, 20, 27, 200)
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