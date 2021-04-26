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

/*function onClickDelete() {
    try {
    var table = document.getElementById("angajatiT");
    var rowCount = table.rows.length;

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[5].childNodes[5];     TypeError: Cannot read property 'childNodes' of undefined
        if(null != chkbox && true == chkbox.checked) {
            if(rowCount <= 1) {
                alert("Cannot delete all the rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }


    }
    }catch(e) {
        alert(e);
    }
}*/
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("angajatiT").deleteRow(i);
  }