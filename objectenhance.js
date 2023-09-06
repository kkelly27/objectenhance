/* same keys and values ES2015  */

function createInstructor(fName, lName){
    return{
        fName,
        lName
    
    }
}

/* computerd property ES2015  */

let favoriteNumber = 21;

const instructor = {
    fName: "Colt",
    [favoriteNumber]: "Thats my favorite!"
}


/* object metods ES2015  */

const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }


/* creatAnimal function ES2015 */


const d = createAnimal("cat", "", "Meowwww!")
// {species: "cat",: ƒ}
d.meow()  //"Meowwww!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}