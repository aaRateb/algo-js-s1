let users = ("Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie")

function countCharacter(value) {
    return value.length
}

users.forEach(user => {
    if (countcharacter(user) < 5) {
        console.log("C'est un prénom long de plus de 5 lettres.")
    } else {
        console.log("Ce n'est pas du tout un prénom long.")
    }
});





