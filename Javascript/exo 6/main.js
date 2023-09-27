var names = []
names.push("Gabriel")
names.push("Paul")
names.push("Arthur")
names.push("Vincent")

/*
for (let i = 0; i < names.length; i++){
    names[i] = names[i] + " va à la pèche."
    console.log(names[i]) 
}
/**méthode plus compliqué, en dessous plus simple */

names.forEach(name => {
    name += "va à la pèche"
    console.log(name)

})
