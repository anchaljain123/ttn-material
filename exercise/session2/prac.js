class CustomMap
{
constructor()
{
    this.key_values= new Array();
    this.size=0;
}

//this.size=console.log((this.key_values).length);

set(key,value)
{
  if(key in this.key_values)
  {
    console.log(" key should be unique ");
  }
  else {
      this.key_values.push([key,value]);
  }

}
get(key)
{
    if(this.key_values[key]===undefined)
    return undefined;
    else
     {
          var arry=[];
  
      arry=this.key_values[key].slice(1);

          return arry;
    }
}

delete(key)
{
    return this.key_values[key]=null;
}
haskey(key)
{
    if(key in this.key_values)
    {
          console.log("key is  present ");

    }

    else
    {
    console.log( "key is  not present ");

    }
}
print()
{

for(var i in this.key_values) //index
  {
    console.log(this.key_values[i]); //print complete array on 0th index etc

    }
}

clear(){
  this.key_values=null;
}

keys(){

  var keyarry=[]
  for(let i in this.key_values)
    keyarry.push(this.key_values[i].slice(0,1)); //keys
    return [keyarry.length,keyarry];

}

sort()
{
        var temp;
      var [len,...keyarry]=this.keys();

    /*  function myFunction(item,index,keyarry) {
            console.log(item);
      }*/


        for(var i = 0; i<len; i++){
           var min = i;
           for(var j = i+1; j <len; j++){
             if(keyarry[j] < keyarry[min]){
              min = j;
             }
           }
           var temp = keyarry[i];
           keyarry[i] = keyarry[min];
           keyarry[min] = temp;
         }
         return keyarry;
}



}

var o=new CustomMap();
o.set(1,'employee1');
o.set(21,'employee2');
o.set(4,true);
o.set(3,'employee3');
console.log(" Sorted keys : " + o.sort());
//o.sort();
o.set('anchal',true);
var v=o.get(1);
//console.log(o.size);
console.log("the value for key  :" +v)
o.haskey(3)
console.log(o.size);
o.print();

console.log(" the keys are : "+ o.keys());
o.clear();
//console.log(res)
