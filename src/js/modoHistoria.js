const modoHitoria = (player) => slime(player)

const slime = player => !(player.monstros[0].completed) ? historia(player, luta, new Slime(), new Slime().antes) : goblin(player)

const goblin = player => luta(player, new Goblin())