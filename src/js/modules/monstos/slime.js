class Slime extends Monstros {
    constructor() {
        super('./src/img/monstros/Slime.png', 'Slime', 100, 100, 10, 18, 100)
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
        this.antes = [
            'Ao seguir pelo leito do lago, você avistou uma ponte logo em seguida que levava para uma cidade rodeada de árvores brilhantes, no meio da ponte você avista uma criatura gelatinosa atacando uma aldeia. Ao se aproximar você observa que dentro da criatura existem restos de armas e armaduras dos guerreiros que tentaram lutar contra ela. Você olha para aquele ser hediondo que nota a sua presença, a gosma viva olha para você com seu único olho e vai na sua direção com um comportamento hostil...'
        ]
        this.pos = [
            'Ao desferir o último golpe, a criatura explode e dispensa tudo que estava preso dentro dela liberando uma luz reluzente  que ilumina o seu ser e a sua mente, te deixando mais forte, trazendo algumas memórias do seu passado. Você vê em sua memória um rosto, você sente que aquele rosto pertence a alguém muito importante para você, e você precisa enfrentar mais desafios e derrotar um ser maligno, somente assim você estará liberto da maldição do esquecimento. Os cidadãos da aldeia chegam até você e agradece profundamente por você ter derrotado aquela ameaça, eles explicam que algumas noites atrás as criaturas começaram a ficar cada vez mais hostis e outras criaturas se transformaram em monstros incontroláveis na aldeia Laguna.',
            'Os moradores da aldeia lhe recebem com bastante hospitalidade e oferecem um local para que você descanse antes de poder continuar seguindo a sua jornada. Durante a noite você sonha com um ser maligno consumindo todo mundo em uma névoa repleta de caos, você acorda em um susto ofegante, o seu mapa está brilhando e revelando um novo local. Você se levanta e pergunta para os moradores de Laguna como chegar naquele lugar, você recebe as instruções e decide partir para seu novo destino.'
        ]
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