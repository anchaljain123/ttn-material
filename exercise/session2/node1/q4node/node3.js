
function getAge() {

var b_date=process.argv.slice(2,3);
var b_mnth=process.argv.slice(3,4);
var b_year=process.argv.slice(4,5);
// var b_date=born[0];
// var b_mnth=born[1];
// var b_year=born[2];

console.log(" birth date : "+b_date+" "+ b_mnth+" "+b_year);

var date=new Date();
var current_year=date.getFullYear();
var current_date=date.getDate();
var current_month=date.getMonth();
current_month+=1;
console.log(" current date : "+current_date+" "+current_month+" "+current_year);

var yrs=current_year-b_year;

/*if(b_date<current_date) {//no. of days after birthday
	var days=current_date-b_date;
}

else  {
		if(b_date>current_date){
					var days=b_date-current_date;
				}
		else { //when equal
	  		var days=0;
		}
}*/
if(b_mnth<current_month)// no.of months after birthday (not for leap year)
{
  	var mnths=current_month-b_mnth;
		var month=12-mnths;
		yrs--;

}
else {
		if(b_mnth==current_month){
				var month=0;
		}
else{
		  var mnths=b_mnth-current_month;
			var month=12-mnths;
		  yrs--;
}

}

return [yrs,month];

}
module.exports.cal_Age = getAge;
