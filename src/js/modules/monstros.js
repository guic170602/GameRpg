class Monstro1{
    constructor(){
        this.nome = 'Monstro'
        this._vida = 100
        this.defense = 10
        this.atack = 15
        this.powers = [
            {
                title: 'Ataque Direto'
            },
            {
                title: 'Chicote das Sombras'
            }
        ]
    }

    get vida(){
        return this._vida
    }

    set vida(valor){
        this._vida -= valor
    }

    ataqueDireto(target){
        const damage = this.atack
        target 
    }
}