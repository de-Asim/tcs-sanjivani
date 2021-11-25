let eName = localStorage.getItem("eName");
console.log(eName)
const greet = document.getElementById('greet');
greet.innerHTML=`hello ${eName} , please submit your task`