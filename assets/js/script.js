var selectedRow = null;

function onFormSubmit() {
    console.log(formData);
    if (validate()) {
        var formData = readFormData();
        console.log(formData);
        if (selectedRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }

        resetForm();
    }
}

function readFormData() {

    var formData = {};
    formData["Matricule"] = document.getElementById("Matricule").value;
    formData["Carte_bancaire_ou_Espece"] = document.getElementById("Carte_bancaire_ou_Espece").value;
    formData["Quantité_de_litre"] = document.getElementById("Quantité_de_litre").value;
    /*
    formData["address"] = document.getElementById("address").value;
    formData["class"] = document.getElementById("class").value;
    formData["school"] = document.getElementById("school").value;
    */
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell2 = newRow.insertCell(0);
    cell2.innerHTML = data.Matricule;

    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.Carte_bancaire_ou_Espece;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Quantité_de_litre;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Modifier</a>
    <a  onClick="onDelete(this)">Supprimer</a>`;

    /*

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.class;

    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.school;

    cell4 = newRow.insertCell(6);
    */

}

function resetForm() {
    document.getElementById('Matricule').value = '';
    document.getElementById('Carte_bancaire_ou_Espece').value = '';
    document.getElementById('Quantité_de_litre').value = '';
    /*
    document.getElementById('address').value = '';
    document.getElementById('class').value = '';
    document.getElementById('school').value = '';
    */
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Matricule').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Carte_bancaire_ou_Espece').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Quantité_de_litre').value = selectedRow.cells[2].innerHTML;
    document.getElementById('actions').value = selectedRow.cells[4].innerHTML;
    /*
    document.getElementById('address').value = selectedRow.cells[3].innerHTML;
    document.getElementById('class').value = selectedRow.cells[4].innerHTML;
    document.getElementById('school').value = selectedRow.cells[5].innerHTML;
    */
}

function updateRecord(formData) {

    selectedRow.cells[0].innerHTML = formData.Matricule;
    selectedRow.cells[1].innerHTML = formData.Carte_bancaire_ou_Espece;
    selectedRow.cells[2].innerHTML = formData.Quantité_de_litre;
    /*
    selectedRow.cells[3].innerHTML = formData.address;
    selectedRow.cells[4].innerHTML = formData.class;
    selectedRow.cells[5].innerHTML = formData.school;
    */

}

function onDelete(td) {
    if (confirm('Vous étes sur de supprimé toutes les informations?')) {
        row = td.parentElement.parentElement;
        document.getElementById("emplist").deleteRow(row.rowIndex);
        resetForm();
    }

}

function validate() {
    isValid = true;
    if (document.getElementById('Matricule').value == "") {
        isValid = false;
        document.getElementById('MatriculeValidationError').classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById('MatriculeValidationError').classList.remove("hide")) {
            document.getElementById('MatriculeValidationError').classList.add("hide");
        }
    }
    if (document.getElementById('Carte_bancaire_ou_Espece').value == "") {
        isValid = false;
        document.getElementById('Carte_bancaire_ou_EspeceValidationError').classList.remove("hide");
    } else if (document.getElementById('Matricule').value == "") {
        isValid = false;
        document.getElementById('MatriculeValidationError').classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById('Carte_bancaire_ou_EspeceValidationError').classList.remove("hide")) {
            document.getElementById('Carte_bancaire_ou_EspeceValidationError').classList.add("hide");
        }
    }

    return isValid;
}