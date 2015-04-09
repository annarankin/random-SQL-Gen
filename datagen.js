var request = require('request');
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
        if (headerTypeArr[1] === 'varchar') {
            var tempVar = "'" + words.choose() + "'";
            // console.log('It\'s a word! '  + tempVar);
        } else if (headerTypeArr[1] === 'integer') {
            var tempVar = Math.floor(Math.random() * 100);
            // console.log('It\'s a number! ' + tempVar)
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