//q1.Write a program that accepts one or more numbers as command-line arguments and prints the
//sum of those numbers to the console (stdout).

var sum=0;
var args=process.argv.slice(2);

console.log(" Argument Array "+args);

if( isNaN(parseInt(args)) )
console.log(" Invalid Input is Entered ");
else{
args.forEach(function (val, index, array) {
  var n=parseInt(val);
  sum+=n;
});
console.log(" Sum of Numbers : "+sum);
}
