//this is a class that provides a constructor for films
//to be added to it

class Film {
    constructor(name, director, year) {
      this.name = name;
      this.director = director;
      this.year = Math.floor(year);
    }

    age(){
        let date = new Date();

        return (date.getFullYear() - this.year);
      }

    spitThisFilm(){
        console.log("\n\tYour film is: "+this.name+".")
        console.log("\tIt was directed by: "+this.director+".")
        console.log("\tIt was released in "+this.year+". This makes it "+this.age()+" years old.\n")
    }

  }

module.exports = Film