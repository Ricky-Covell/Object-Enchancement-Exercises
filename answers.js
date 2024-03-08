// Same keys and values
// REFACTORED:
const createInstructor = (firstName, lastName) => ({firstName, lastName});




// Computed Property Names
// REFACTORED
let favoriteNumber = 42;
const instructor = {
    firstName:'Colt',
    [favoriteNumber]: 'That is my favorite!'
}




// Object Methods
const instructor2 = {
    firstName: 'Colt',
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return `${this.firstName} says bye!`
    }
}





// createAnimal function
function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}

const sheep = createAnimal("sheep", "bleet", "BAAAAaaaa");
