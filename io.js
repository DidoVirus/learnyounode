var newarr = process.argv[2];
var fs = require('fs');


// var file = fs.readFileSync(newarr).toString().split('\n');
// console.log(file.length -1)

fs.readFile(newarr, function doneReading(err, fileContents) {
   if (err){
       console.log('Error')
   } else {
       var number = fileContents.toString().split('\n').length -1;
   console.log(number);
   }

});
