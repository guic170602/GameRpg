class Slime extends Monstros {
    constructor() {
        super()
        this.img = './src/img/monstros/Slime.png'
        this.nome = 'Slime'
        this.vidaMax = 100
        this._vida = 100
        this.defense = 10
        this.atack = 18
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
        this.cidade = 'laguna'
        this.antes = 'Ao seguir pelo leito do lago, você avistou uma ponte logo em seguida que levava para uma cidade rodeada de árvores brilhantes, no meio da ponte você avista uma criatura gelatinosa atacando uma aldeia. Ao se aproximar você observa que dentro da criatura existem restos de armas e armaduras dos guerreiros que tentaram lutar contra ela. Você olha para aquele ser hediondo que vem na sua direção com um comportamento hostil. Prepare-se para o combate.'
        this.pos = 'Ao desferir o último golpe, a criatura explode e libera tudo que estava preso dentro dela, uma luz reluzente paira sobre o local e você sente sua mente se iluminar enquanto lembra um pouco do seu passado, você vê em sua memória agora parcialmente recuperada que precisa enfrentar mais desafios e derrotar um ser maligno, somente assim você estará liberto da maldição do esquecimento. Um novo local do seu mapa se ilumina revelando o próximo destino.'
    }

    ataqueDireto(target, title) {
        let damage = this.atack
        if (damage - target.defense > 0) {
            target.vida = -(damage - target.defense)
            damage -= target.defense
            return `${this.nome} usou ${title} e você rececebeu ${damage} de dano!!`
        } else {
            return 'A sua defesa é maior do que o ataque do monstro'
        }
    }

    chicotedasSombras(target, title) {
        let damage = this.atack
        target.vida = -damage
        return `${this.nome} usou ${title} e você rececebeu ${damage} de dano!!`
    }
}

class SlimeTrain extends Slime {
    constructor() {
        super()
        this.exp = 50
    }
}