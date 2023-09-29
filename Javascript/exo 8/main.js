class pokemon {
    constructor(name, atk, def, hp, luck) {
        this.name = name
        this.atk = atk
        this.def = def
        this.hp = hp
        this.luck = luck
    }
    
    attackPokemon(pokemon) {
        if(this.isLucky()) {
            let damage = this.atk - pokemon.def
            pokemon.hp -= damage
            console.log(this.name + "a attaqué " + pokemon.name + " pour " + damage + " dégat. Il lui reste " + pokemon.hp + "hp")
        } else {
            console.log(this.name + " a raté son attaque.")
        }
    }

    isLucky() {
        return Math.random() < this.luck
    }
}

let pikachu = new pokemon("Pikachu", 12, 10, 200, 0.9)
let lucario = new pokemon("Lucario", 20, 10, 500, 0.001)

while(pikachu.hp >= 0 || lucario >= 0) {

    pikachu.attackPokemon(lucario)
    if(lucario.hp <= 0) {
        console.log(lucario.name + " est mort.")
        break
    }

    lucario.attackPokemon(pikachu)
    if(pikachu.hp <= 0) {
        console.log(pikachu.name + " est mort.")
        break
    }

}


/*
class pokemon {
    constructor(name, atk, def, hp, luck) {
        this.name = name
        this.atk = atk
        this.def = def
        this.hp = hp
        this.luck = luck
    }
    
    attackPokemon(pokemon) {
        if(this.isLucky()) {
            let damage = this.atk - pokemon.def
            pokemon.hp -= damage
            console.log(this.name + "a attaqué " + pokemon.name + " pour " + damage + " dégat. Il lui reste " + pokemon.hp + "hp")
        } else {
            console.log(this.name + " a raté son attaque.")
        }
    }

    isLucky() {
        return Math.random() < this.luck
    }
}

let pikachu = new pokemon("Pikachu", 12, 10, 200, 0.9)
let lucario = new pokemon("Lucario", 20, 10, 500, 0.001)

while(pikachu.hp >= 0 || lucario >= 0) {

    pikachu.attackPokemon(lucario)
    if(lucario.hp <= 0) {
        console.log(lucario.name + " est mort.")
        break
    }

    lucario.attackPokemon(pikachu)
    if(pikachu.hp <= 0) {
        console.log(pikachu.name + " est mort.")
        break
    }

}