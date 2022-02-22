class Monstros {
    constructor(img, nome, vidaMax, vida, defense, atack, exp) {
        this.img = img
        this.nome = nome
        this.vidaMax = vidaMax
        this._vida = vida
        this.defense = defense
        this.atack = atack
        this.exp = exp
    }
    get vida() {
        return this._vida
    }

    set vida(valor) {
        if (valor < 0) {
            this._vida + valor >= 0 ? this._vida += valor : this._vida = 0
        }
    }
}