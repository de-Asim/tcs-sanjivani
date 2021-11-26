let warning=document.getElementById('warning');
let eName = localStorage.getItem("eName");
console.log(eName)
const greet = document.getElementById('greet');
greet.innerHTML=`hello ${eName} , please submit your task`

validateForm = ()=>{
    let fileValue = document.forms['submitForm']['fileInput'].value;
    if(fileValue!=null && fileValue != ''){
        return true;
    }
    else{
        warning.innerHTML=`**Can't submit empty file** `
        return false;
    }
}
removeWarn =(e)=>{
    let fileValue = document.forms['submitForm']['fileInput'].value;
    if(fileValue!=null && fileValue!=''){
        warning.innerHTML=``;
        let fileName = document.getElementById('filename');
        let newName = e.replace(/^.*\\/,"");
        fileName.innerHTML=`${newName}`;
        fileName.style.color='white';
    }
}