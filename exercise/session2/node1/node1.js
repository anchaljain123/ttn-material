var name1="anchal";//local to file scope
name="jain";//global
global.name2="ttn"//global
function f(){
  console.log(this.name2);//global
}

f();//undefined
