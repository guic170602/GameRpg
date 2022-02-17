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
            return `${target.nome} recebeu ${damage} de dano!! E você ficou com ${this.mana} de mana`
        }
    }

}