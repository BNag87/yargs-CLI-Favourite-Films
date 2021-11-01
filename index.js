//To make this program work, it has to be run from a terminal.
//Add the following to yours:
// node index.js --command="add" --name="633 Squadron" --director="Walter Grumman" --year="1964" --name2="The Matrix" --director2="Wachowski" 

//argv is an array
//use yargs.argv after installing yargs with the following:
//  npm init -y
//  npm i yargs
//  node src/app.js --title="Boss Movie Title"

//...becasue you're passing in an object with yargs, you need to ensure that in the terminal
//that you specify the key of each attribute. so --name="filmName"
//then, when accessing in js, use dot notation to access the object passed from the terminal
//so, if your yargs.argv is called "spoon", use spoon.name and that returns the value provided

//when using plain old argv, that's an array, so details from the terminal
//are accessed with "spoon[3]"

const Film = require("./utils") //imports the helloWorld() function from the other file

//const args = process.argv; THIS IS THE ORIGINAL ARGV
const yargs = require("yargs")
const args = yargs.argv;


if (args.command == "add")
{
    let film = new Film(args.name, args.director, args.year)
    let film2 = new Film(args.name2, args.director2, args.year2)
    // let film =  {Name: args[3], Director: args[4], Year: args[5]}

    if(args.name == null || args.director == null || args.year == null || args.name2 == null || args.director2 == null || args.year2 == null)
    {
        console.log("A film needs to have a NAME, DIRECTOR and YEAR. Please run the command line again with all three provided (in quotes)")
    }
    else{
        film.spitThisFilm()
        film2.spitThisFilm()
    }
    
}
else if(args.command!="add")
{
    console.log("\n\t" +args[3]+ " was not added. If you want to add a film, please make your first parameter 'add'.")
    
}

