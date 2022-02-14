class Player{
    constructor(classe, nome, idade){
        this.classe = classe
        this.nome = nome
        this.idade = idade
        this.levelAtual = 1
        this.levelMax = 10
        this._life = 100
        this._mana = 60
        this.expAtual = 0
        this._passar = 100
        this.defense = 10
        this.phisAttack = 15
        this.magicAttack = 15
        this.atacks = [
            {
                title: 'Ataque Basico'
            } 
        ]
    }

    get passar(){
        return this._passar - this.expAtual
    }

    get life(){
        return this._life
    }

    set life(valor){
        this._life -= valor
    }

    get mana(){
        return this._mana
    }

    set mana(valor){
        this._mana -= valor
    }

    ataqueBasico(target){
        let damage = this.phisAttack
        if (damage - target.defense > 0){
            target.vida = damage - target.defense
            damage -= target.defense
            return `${target.nome} rececebeu ${damage} de dano e esta com ${target.vida} vida`
        }
    }
}


class Mage extends Player{
    constructor(classe, nome, idade){
        super(classe, nome, idade)
        this.img = './src/img/mage.png'
        this.life = 80
        this.defense = 5
        this._mana = 20
        this.phisAttack = 10
        this.magicAttack = 25
        this.atacks = [
            {
                title: 'Ataque Basico'
            },
            {
                title: 'Bola de Fogo',
            }   
        ]
    }
    bolaDeFogo(target){
        const damage = this.magicAttack

        if(this.mana <= 0){
            return 'Mana insuficiente'
        }else{
            target.vida = damage
            this.mana = 13
            return `${target.nome} recebeu ${damage} de dano e esta com ${target.vida} vida e ficou com ${this.mana} de mana`
        }
    }

}

class Warrior extends Player{
    constructor(classe, nome, idade){
        super(classe, nome, idade)
        this.img = './src/img/warrior.png'
        this.life = 110
        this.defense = 15
        this.phisAttack = 25
        this.magicAttack = 5
    }
}

class Assassin extends Player{
    constructor(classe, nome, idade){
        super(classe, nome, idade)
        this.img = './src/img/assassin.png'
    }
}

class Archer extends Player{
    constructor(classe, nome, idade){
        super(classe, nome, idade)
        this.img = './src/img/archer.png'
    }
}