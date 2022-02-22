class Mage extends Player {
    constructor(classe, nome, idade) {
        super(classe, nome, idade)
        this.img = './src/img/classes/mage.png'
        this._vida = 80
        this.vidaMax = 80
        this.defense = 5
        this._mana = 120
        this.phisAttack = 10
        this.magicAttack = 25
        this.atacks = [{
                title: 'Ataque Basico',
                color: '#a5a5a5',
                imgPower: './src/img/powers/cajado.png',
                funcao: monstroAux => this.ataqueBasico(monstroAux)
            },
            {
                title: 'Bola de Fogo',
                color: '#8e0b03',
                imgPower: './src/img/powers/fogo.png',
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
            return `${target.nome} recebeu ${damage} de dano!! E você ficou com ${this.mana} de mana`
        }
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
}