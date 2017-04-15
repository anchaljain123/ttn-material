//q3.Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines
//it contains to the console (stdout), similar to running cat file | wc -l.

var fs=require('fs');
var filename="./note.txt";
var content=fs.readFileSync(filename);
var newstr=content.toString();//string
var res=newstr.split("\n");
console.log(" Counting Number Of Lines Sync :");
console.log(res.length-1);
