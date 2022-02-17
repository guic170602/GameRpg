class Warrior extends Player {
    constructor(classe, nome, idade) {
        super(classe, nome, idade)
        this.img = './src/img/classes/warrior.png'
        this._vida = 10
        this.vidaMax = 10
        this.defense = 10
        this.phisAttack = 25
        this.magicAttack = 5
    }

    passarNivel() {
        this.level++
            if (this.level == 2) {
                this._vida += 50
                this.vidaMax += 50
                this.defense += 4
                this._mana += 15
                this.phisAttack += 7
                this.magicAttack += 3
                this.passar += 50
            }
        this.exp = 0
    }
}