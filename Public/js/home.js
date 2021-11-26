async function fetchData(){
let response= await fetch('../DATA/eList.json');
let values = await response.json();
console.log(values);
const dropdown = document.getElementById('dropdown');
values.forEach(element => {
    dropdown.innerHTML+=`<option class="dropdownElements" value="${element.eName}">${element.eName}</option>`;
});

const submitBtn= document.getElementById('submitBtn');

validateForm=()=>{
    let taskValue = document.forms['setTaskForm']['setTaskInput'].value;
    if(taskValue!=null && taskValue!=''){
        return true;
    }
    else{
        let warning = document.getElementById('warning');
        warning.innerHTML=`**Task can't be empty**`;
        return false;
    }
}
removeWarning=(e)=>{
    if(e!=null && e!=''){
        let warning = document.getElementById('warning');
        warning.innerHTML=``;
    }
}


submitBtn.addEventListener('click',()=>{
    let selectedEmployee = dropdown.value;
    localStorage.setItem("eName",selectedEmployee);
    const assignBox = document.getElementById('assignBox');
    assignBox.innerHTML=`<div class="header"><span id='goback'><i class="fas fa-arrow-left"></i></span>Please assign a task to Mr/Ms. ${selectedEmployee}</div>
    <form name="setTaskForm" id="setTaskForm" action='/submit' method="post" onsubmit="return validateForm()">
        <textarea name="setTaskInput" id="setTaskInput" cols="" rows="4" onchange="removeWarning(this.value)" placeholder="Describe the task here:"></textarea>
        <div id = 'warning'></div>
        <button type="submit" id="setTaskBtn" class="Btn">Assign Task</button>
    </form>`;
    const employeeForm = document.getElementById("employeeForm");
    employeeForm.style.display="none";
    assignBox.style.display="block";
    let goback = document.getElementById('goback');
    goback.addEventListener('click',()=>{
        employeeForm.style.display="flex";
        assignBox.style.display="none";
    })
})
}
fetchData();