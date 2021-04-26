function onClickSubmit() {
  let nume = document.getElementById("numeAngajat").value;
  let lastName = document.getElementById("prenumeAngajat").value;
  let sex = document.getElementById("emailAngajat").value;
  let email = document.getElementById("genAngajat").value;
  let dataNastere = document.getElementById("dataN").value;

  let tableContent = `
                      <tr>
                          <td>${nume}</td>
                          <td>${lastName}</td>
                          <td>${sex}</td>
                          <td>${email}</td>
                          <td>${dataNastere}</td>
                          <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
                      </tr>
                          `;

  document.getElementById("angajatiT").innerHTML += tableContent;
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("angajatiT").deleteRow(i);
  }

function searchEmployee(){

}