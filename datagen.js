var Moniker = require('moniker'); //moniker generates random words from a predefined dictionary
var words = Moniker.generator([Moniker.noun]);
var userInput = process.argv;

userInput.splice(0, 2) //removes node and program path

var tableName = userInput.splice(0, 1)
var numberOfLines = parseInt(userInput.splice(0, 1))
var headersAndTypes = userInput.join(" ").split(",")

console.log("You asked for " + numberOfLines + " line(s) to be generated for " + tableName + " containing:\n" + userInput.join(" "))
var valuesArray = []

for (var i = 0; i < numberOfLines; i++) {
    var randValueArray = [];
    headersAndTypes.forEach(function(e) {
        var headerTypeArr = e.trim().split(" ");
        // console.log(e + headerTypeArr[1])
        if (headerTypeArr[1] === 'varchar' && headerTypeArr.length === 2) {
            var tempVar = "'" + words.choose() + "'";
            // console.log('It\'s a word! '  + tempVar);
        } else if (headerTypeArr[1] === 'integer' && headerTypeArr.length === 4) {
            var randIntMin = parseInt(headerTypeArr[2])
            var randIntMax = parseInt(headerTypeArr[3])
            var tempVar = Math.floor(Math.random() * (randIntMax - randIntMin)) + randIntMin;
            // if (isNaN(tempVar)) {
            //     console.log("Error: Random integers (max, min) are not numbers or are not defined.")
            // }
            // console.log('It\'s a number! ' + tempVar)
        } else {
            console.log('ERROAAAR')
            err = "\nYou have a formatting problem! Format:\n\n$node datagen.js <TABLENAME> <NUMBER OF LINES TO GENERATE> <header1> <datatype (varchar/integer min max)>, ...\n\nExample: $ node datagen.js table2 5 name varchar, age integer 10 20, color varchar\n"
            throw err;
        }
        randValueArray.push(tempVar);
    }); //end forEach

    var onlyHeaders = [];
    headersAndTypes.forEach(function(e, index) {
        var headerTypeArr = e.trim().split(" ");
        onlyHeaders.push(headerTypeArr[0])
    });

    var sqlString = 'db.run("INSERT INTO ' + tableName + " (" + onlyHeaders.join(", ") + ") VALUES (" + (randValueArray).join(", ") + ');");'

    console.log(sqlString) //logging result

}; //end for loop


console.log("DONE")