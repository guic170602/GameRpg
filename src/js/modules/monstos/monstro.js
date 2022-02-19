class Monstros {
    constructor() {

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