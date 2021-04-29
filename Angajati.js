var employeesList=[];

jQuery(document).ready(function ($) {
    $.ajax({
        method: "GET",
        url: 'https://localhost:5001/employee/Employee',
        success: function (data) {
            employeesList = data;
            loadEmployees(employeesList);
        },
        error: function (data) {
        alert(`Failed to load employees list.`);
        },
    });

});
   
var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];

function loadEmployees(employeesList){
    for (index = 0; index < employeesList.length; index++)
    { 
        appendRow(employeesList[index])
    }
}
function validateInput(newEmployee){
        
    if (!newEmployee.FirstName || !newEmployee.LastName || !newEmployee.Email) {
        return false;
    }
    return true;
}
        
function addEmployee() {

    var newEmployee = new Object();
    newEmployee.Id = 0;
    newEmployee.FirstName = document.getElementById('prenumeAngajat').value;
    newEmployee.LastName = document.getElementById('numeAngajat').value;
    newEmployee.Email = document.getElementById('emailAngajat').value;
    if (!validateInput(newEmployee)) {
        alert("You need to fill all the information!");
        return;
    }
    newEmployee.Gender = document.getElementById('genAngajat').value;
    
    newEmployee.Birthdate = document.getElementById('dataN').value;

    $.ajax({
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(newEmployee),
        url: 'https://localhost:5001/employee/Employee',
        success: function (data) {
            appendRow(data)
        },
        error: function (data) {
        alert(`Failed to load employees list.`);
        },
    });
    
}

function appendRow(employee){
    let employeesTable = document.querySelector("table");
    var rowId = employeesTable.getElementsByTagName("tr").length;
    let newRow = ` <tr>
                        <td id="firstName">${employee.firstName}</td>
                        <td id="lastName">${employee.lastName}</td>
                        <td id="email">${employee.email}</td>
                        <td id="gender">${employee.gender}</td>
                        <td id="birthdate">${employee.birthdate}</td>
                        <td><input type="button" value="Delete" onclick="deleteEmployee(this)"></td>
                    </tr>`;
                
    employeesTable.innerHTML += newRow;

}

function deleteEmployee(elem) {
    var row = elem.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function searchEmployee() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("angajatiT");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }