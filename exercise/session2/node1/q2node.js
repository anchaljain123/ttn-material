//q2.Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines
//it contains to the console (stdout), similar to running cat file | wc -l.

var fs=require('fs');
var filename="./note.txt";

const readline = require('readline');

fs.readFile(filename,function(err,contents){
  if(err){
    console.log(err);
  }
  else {

      var newstr=contents.toString();//string
      var res=newstr.split("\n");
      console.log(" Counting Number Of Lines Async :");
      console.log(res.length-1);

    //  console.log(newstr);
      //var s=newstr.replace(/(\n)/gm," "); //string
      //var word_str=s.substring(0,newstr.length-1);
//      var res=s.split(" "); //object

      /*  for (i = 0; i < res.length; i++) {
          if (res[i] != "") {
            count += 1;
          }
        }*/

        }

});
