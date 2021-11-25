async function fetchData(){
let response= await fetch('../DATA/eList.json');
let values = await response.json();
console.log(values);
const dropdown = document.getElementById('dropdown');
values.forEach(element => {
    dropdown.innerHTML+=`<option class="dropdownElements" value="${element.eName}">${element.eName}</option>`;
});

const submitBtn= document.getElementById('submitBtn');



submitBtn.addEventListener('click',()=>{
    let selectedEmployee = dropdown.value;
    localStorage.setItem("eName",selectedEmployee);
    const assignBox = document.getElementById('assignBox');
    assignBox.innerHTML=`<div class="header">Please assign a task to Mr/Ms. ${selectedEmployee}</div>
    <form name="setTaskForm" id="setTaskForm" action='/submit' method="post">
        <textarea name="setTaskInput" id="setTaskInput" cols="" rows="4" placeholder="Describe the task here:" required></textarea>
        <button type="submit" id="setTaskBtn" class="Btn">Assign Task</button>
    </form>`;
    const employeeForm = document.getElementById("employeeForm");
    employeeForm.style.display="none";
    assignBox.style.display="block";
})
// function validateForm(){
    
// }
}
fetchData();