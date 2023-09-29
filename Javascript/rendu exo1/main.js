let playslist = ["Anissa de Wejden", "Pnl - Au dd", "Dtf - Comme tu veux", "MMZ -  Capuché dans le Club"]

class personnage {
    constructor(name, pv) {
    this.name = name
    this.pv = pv
    }

    trajet (playslist) {
    let    redlight = 0
    let    changetaxi = 0
    
    while(redlight < 30 && this.pv > 0)
    redlight += 1

    }

}
let jack = new personnage("Jack", 30)
console.log(" L'homme se nomme", jack.name, "il déteste la musique Wejden, là santé mentale de Jack est de", jack.pv)

/* Ma logique pour continuer,crée donc la variable trajet qui permet de mettre toute les conditions if et else et while, il faut crée 2 variables, 1 "redligth"(qui compte le nombre de feux rouge et son arriver chez sois et qui permet de savoir si il a gagné ou pas)
et 1 pour les changements du taxis("changetaxi").(qui permet de savoir le nombre de fois où il tombe sur Wejden et ces points de vie)
 Par la suite on applique un random math pour choisir parmi la play list 
Et par ça, dès que Jack tombe sur la musique Anissa, on applique le if qui dit qu'il perd des points de vie dès qu'il tombe sur Anissa et ajouter +1 sur la var changement de taxi, et else dans le cas où il ne tombe pas dessus. 
A la fin un appliquer un if qui dit que dès qu'il n'a plus de vie, donc inférieur ou égal à 0, on fait un console log ou on dit qu'il explose. 
Dans le cas où il arrive, sans exploser, on fait un if (s'il arrive à 30 arrêts de feu rouge) celui ci gagne et arrive chez sois. */