// TASK 1
let myCustomForm = document.getElementById("myCustomForm");

function validate(field, reg) {
    let flag;
    if(!field.value.match(reg)){
        field.style.border = "1px solid red";
        flag = false;
    }
    else{
        field.style.border = "2px solid green";
        flag = true;
    }
    return flag;
}

myCustomForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullNamePattern = /^[А-ЯІЇЄа-яіїє]+ [А-ЯІЇЄа-яіїє]+ [А-ЯІЇЄа-яіїє]+$/;
    const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})/;
    const idCardPattern = /^\d{9}$/;
    const birthdayPattern = /^\d{2}\.\d{2}\.\d{4}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const fullName = document.getElementById("fullName");
    const phoneNumber = document.getElementById("phoneNumber");
    const idCard = document.getElementById("id-card");
    const birthday = document.getElementById("birthday");
    const email = document.getElementById("email");

    let userFullName = document.getElementById("user-fullName");
    let userPhoneNumber = document.getElementById("user-phoneNumber");
    let userIdCard = document.getElementById("user-id-card");
    let userBirthday = document.getElementById("user-birthday");
    let userEmail = document.getElementById("user-email");

    let fullNameRes = validate(fullName, fullNamePattern);
    let phoneNumberRes = validate(phoneNumber, phoneNumberPattern);
    let idCardRes = validate(idCard, idCardPattern);
    let birthdayRes = validate(birthday, birthdayPattern);
    let emailRes = validate(email, emailPattern);

    if (fullNameRes && phoneNumberRes && idCardRes && birthdayRes && emailRes) {
        userFullName.innerHTML = fullName.value;
        userPhoneNumber.innerHTML = phoneNumber.value;
        userIdCard.innerHTML = idCard.value
        userBirthday.innerHTML = birthday.value;
        userEmail.innerHTML = email.value;
    } else {
        alert("Введіть корректні данні!");
    }
})

// TASK 2

let task2 = document.querySelector(".task2");
let colorPicker = document.getElementById("colorPicker");

createTable();

let myCell = document.getElementById("4");
myCell.addEventListener("mouseover", changeColor);
myCell.addEventListener("click", changeColorSelected);
myCell.addEventListener("dblclick", changeElementsColor);

function createTable() {
    let table = document.createElement("table");
    table.classList.add("myCustomTable");

    for(let i = 0; i < 6; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            let td = document.createElement("td");
            let number = j + 1 + i * 6;
            td.innerHTML = number + "";
            td.id = number + "";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    task2.appendChild(table);
}

function randomColor() {
    return Math.floor(Math.random() * 255);
}

function changeColor() {
    myCell.style.backgroundColor = 'rgb(' + randomColor() + "," + randomColor() + "," + randomColor() + ')';
}

function changeColorSelected() {
    myCell.style.backgroundColor = colorPicker.value;
}

function changeElementsColor() {
    for (let i = 0, j = 5; i < 6, j >= 0; i++, j--) {
        let id = j + 1 + i * 6;
        let cell = document.getElementById(id + "");
        cell.style.backgroundColor = colorPicker.value;
    }
}