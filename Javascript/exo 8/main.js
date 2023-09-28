class pokemon {
    constructor(name, attack, defense, hp){
    
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }        
}

let pikachu = new pokemon ("Pikachu", 50, 100, 1000)
let dracofeu = new pokemon ("Dracofeu", 150, 50, 1000)

console.log("Le Pokémon s'apelle ", dracofeu.name, "Il possède ", dracofeu.attack, "d'attaque !", "et a", dracofeu.hp, "de points de vie !" , "et", dracofeu.defense, "de défense !")