//q4.Create a utils method for computing age of a person using date of birth and use it in more than 1 places using require module.

var util = require('./node3.js');
var agecal=util.cal_Age();
console.log("Age is : "+agecal[0]+" & "+agecal[1]+" months completed " );
//var born_time=process.argv.slice(2);
/*var born_time;

var  readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Birth Date : ', (birth_date) => {

  console.log(`Thank you for your valuable feedback: ${birth_date}`);
  born_time=birth_date

  rl.close();
});
console.log(born_time);*/


 /*
var prompt = require('prompt');
 prompt.start();

 prompt.get(['bornyear'],function(err,result) {

   if(err) console.log(err);
   else {
     console.log(result.bornyear);
       born_year=result;
   }

  })
console.log(born_year);*/
