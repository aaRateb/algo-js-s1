class hero {
    constructor(name, attack, pv) {
        this.name = name
        this.attack = attack
        this.pv = pv

    }

}

class monsters {
    constructor(pv, attack) {
        this.pv = pv
        this.attack = attack

    
    }
    getlife( ) {
            console.log(this.pv)
        
        }

}

let reinor = new hero ("Reinor", 12, 300)
let gnome = new monsters (10, 1200)



if (gnome.pv -= reinor.attack <=0) {
    console.log("Le gnome est mort.")
}