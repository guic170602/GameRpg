class Warrior extends Player {
    constructor(classe, nome, idade) {
        super(classe, nome, idade)
        this.img = './src/img/classes/warrior.png'
        this._vida = 130
        this.vidaMax = 130
        this.defense = 10
        this.phisAttack = 25
        this.magicAttack = 5
        this.atacks = [{
            title: 'Ataque Basico',
            imgPower: './src/img/powers/espada.png',
            color: '#a5a5a5',
            funcao: monstroAux => this.ataqueBasico(monstroAux)
        }]
    }

    passarNivel() {
        this.level++

            if (this.level == 2) {
                this.vidaMax += 60
                this._mana += 15
                this.defense += 4
                this.phisAttack += 7
                this.magicAttack += 3
                this.passar += 50
            } else
        if (this.level == 3) {
            this.vidaMax += 70
            this._mana += 10
            this.defense += 6
            this.phisAttack += 5
            this.magicAttack += 5
            this.passar += 100
        }
        this.exp = 0
    }

    lancaGiratorio(target) {
        let damage = Math.ceil(this.phisAttack + (10 * this.phisAttack / 100))
        if (damage - target.defense > 0) {
            target.vida = -(damage - target.defense)
            damage -= target.defense
            return `${target.nome} rececebeu ${damage} de dano!!`
        }
    }
}