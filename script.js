const fullname = JSON.parse(localStorage.getItem("userInfo")).fullname;
// let staffList = [
//     {
//         id: 1,
//         name: "B",
//         dob: "1990-10-10",
//         phone: "0915055032",
//         email: "B@gmail.com",
//         department: "Accouting",
//         position: "Staff",
//     },
//     {
//         id: 2,
//         name: "A",
//         dob: "1991-11-11",
//         phone: "081236598",
//         email: "A@gmail.com",
//         department: "Sales",
//         position: "Team Leader",
//     },
//     {
//         id: 3,
//         name: "M",
//         dob: "1992-12-12",
//         phone: "012356895",
//         email: "M@gmail.com",
//         department: "Accouting",
//         position: "Deputy Chief Accountant",
//     },
//     {
//         id: 4,
//         name: "Z",
//         dob: "1980-8-10",
//         phone: "01236952841",
//         email: "Z@gmail.com",
//         department: "Product",
//         position: "Staff",
//     },
//     {
//         id: 5,
//         name: "H",
//         dob: "1995-10-12",
//         phone: "0126308457",
//         email: "H@gmail.com",
//         department: "Product",
//         position: "Staff",
//     },
//     {
//         id: 6,
//         name: "To",
//         dob: "1996-12-12",
//         phone: "019348424",
//         email: "To@gmail.com",
//         department: "Back Office",
//         position: "Staff",
//     },
//     {
//         id: 7,
//         name: "P",
//         dob: "1982-12-12",
//         phone: "012685211",
//         email: "P@gmail.com",
//         department: "Product",
//         position: "Team Leader",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
//     {
//         id: 8,
//         name: "T",
//         dob: "1998-8-18",
//         phone: "0857518898",
//         email: "T@gmail.com",
//         department: "Product",
//         position: "Chief Technology Officer",
//     },
// ];
if (!localStorage.getItem("staffList")) {
    localStorage.setItem("staffList", JSON.stringify([]));
}

let staffList = JSON.parse(localStorage.getItem('staffList'));
let editId = null;

const table = document.querySelector("#table-data");
const fullnameInput = document.querySelector("#fullname");
const dobInput = document.querySelector("#dob");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const departmentInput = document.querySelector("#department");
const positionInput = document.querySelector("#position");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".close");
const cancelBtn = document.querySelector("#cancelBtn");
const addBtn = document.querySelector("#addBtn");
const searchInput = document.querySelector("#search-bar");
const sort = document.querySelector(".sorting");
const sortName = document.querySelector(".sorting-name");
// const sortDob = document.querySelector(".sorting-dob");
// const sortPhone = document.querySelector(".sorting-phone");
// const sortEmail = document.querySelector(".sorting-email");
// const sortDepartment = document.querySelector(".sorting-department");
// const sortPos = document.querySelector(".sorting-pos");
const userFullname = document.querySelector("#user-fullname");
userFullname.innerHTML = `Hello: ${fullname}`;

sort.addEventListener("click", function() {
    staffList.reverse();
    refreshTable();
});

let stage = {
    columnName: "",
    isAsc: true,
}



sortName.addEventListener("click", function() {
    stage.columnName = "name";
    if (stage.isAsc) {
        staffList.sort(sortNameAsc);
        stage.isAsc = false;
        document.querySelector(".sorting-name .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-name .desc").setAttribute("style", "visibility: hidden");
        refreshTable();
    } else {
        staffList.sort(sortNameDes);
        stage.isAsc = true;
        document.querySelector(".sorting-name .asce").setAttribute("style", "visibility: hidden");
        document.querySelector(".sorting-name .desc").setAttribute("style", "visibility: initial");
        refreshTable();
    }
});


function sortNameAsc(firstEl, secondEl) {
    if (firstEl.name < secondEl.name) {
        return -1;
    }
    if (firstEl.name > secondEl.name) {
        return 1;
    }
    return 0;
}

function sortNameDes(firstEl, secondEl) {
    if (firstEl.name < secondEl.name) {
        return 1;
    }
    if (firstEl.name > secondEl.name) {
        return -1;
    }
    return 0;
}

function searchFunction() {
    const searchValue = searchInput.value;
    const option = document.querySelector("#search-option").value;
    const searchArr = staffList.filter(function(item) {
        return item[`${option}`].toLowerCase().includes(searchValue.toLowerCase());
    });
    table.innerHTML = "";
    for (let i = 0; i < searchArr.length; i++) {
        const staff = searchArr[i];
        const row = document.createElement("tr");
        const col1 = document.createElement("td");
        const col2 = document.createElement("td");
        const col3 = document.createElement("td");
        const col4 = document.createElement("td");
        const col5 = document.createElement("td");
        const col6 = document.createElement("td");
        const col7 = document.createElement("td");
        const col8 = document.createElement("td");
        const delBtn = document.createElement("button");
        const editBtn = document.createElement("button");

        col1.innerHTML = staff.id;
        col2.innerHTML = staff.name;
        col3.innerHTML = staff.dob;
        col4.innerHTML = staff.phone;
        col5.innerHTML = staff.email;
        col6.innerHTML = staff.department;
        col7.innerHTML = staff.position;

        let delIcon = document.createElement("img");
        delIcon.setAttribute("style", "width: 20px; height: 20px;");
        delIcon.setAttribute("src", "./icon-del.png");
        delBtn.appendChild(delIcon);
        delBtn.style.marginRight = "10px"
        delBtn.addEventListener("click", function () {
            delStaffFunction(staff.id);
        })

        let editIcon = document.createElement("img");
        editIcon.setAttribute("style", "width: 20px", "height: 20px");
        editIcon.setAttribute("src", "/icon-edit.png");
        editBtn.appendChild(editIcon);
        editBtn.addEventListener("click", function () {
            editStaffFunction(staff.id);
            openModal();
        })

        col8.appendChild(delBtn);
        col8.appendChild(editBtn);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);
        row.appendChild(col8);
        table.appendChild(row);
    }
}

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

modalBtn.addEventListener("click", function () {
    openModal();
});
closeBtn.addEventListener("click", function () {
    closeModal();
    clearInput();
    editId = null;
})
cancelBtn.addEventListener("click", function () {
    closeModal();
    clearInput();
    editId = null;
})

function clearInput() {
    fullnameInput.value = "";
    dobInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    departmentInput.value = "";
    positionInput.value = "";
};

function refreshTable() {
    table.innerHTML = "";
    for (let i = 0; i < staffList.length; i++) {
        const staff = staffList[i];
        const row = document.createElement("tr");
        const col1 = document.createElement("td");
        const col2 = document.createElement("td");
        const col3 = document.createElement("td");
        const col4 = document.createElement("td");
        const col5 = document.createElement("td");
        const col6 = document.createElement("td");
        const col7 = document.createElement("td");
        const col8 = document.createElement("td");
        const delBtn = document.createElement("button");
        const editBtn = document.createElement("button");

        col1.innerHTML = staff.id;
        col2.innerHTML = staff.name;
        col3.innerHTML = staff.dob;
        col4.innerHTML = staff.phone;
        col5.innerHTML = staff.email;
        col6.innerHTML = staff.department;
        col7.innerHTML = staff.position;

        let delIcon = document.createElement("img");
        delIcon.setAttribute("style", "width: 20px; height: 20px;");
        delIcon.setAttribute("src", "./icon-del.png");
        delBtn.appendChild(delIcon);
        delBtn.style.marginRight = "10px"
        delBtn.addEventListener("click", function () {
            delStaffFunction(staff.id);
        })

        let editIcon = document.createElement("img");
        editIcon.setAttribute("style", "width: 20px", "height: 20px");
        editIcon.setAttribute("src", "/icon-edit.png");
        editBtn.appendChild(editIcon);
        editBtn.addEventListener("click", function () {
            editStaffFunction(staff.id);
            openModal();
        })

        col8.appendChild(delBtn);
        col8.appendChild(editBtn);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);
        row.appendChild(col8);
        table.appendChild(row);
    }
};

addBtn.addEventListener("click", function () {
    if (
        fullnameInput.value == "" ||
        dobInput.value == "" ||
        phoneInput.value == "" ||
        emailInput.value == "" ||
        departmentInput.value == "" ||
        position.value == ""
    ) {
        return alert("Please fill up the blanks !!!")
    };
    if (editId !== null) {
        const indexeditStaffFunction = staffList.findIndex((item) => item.id === editId);
        const newStaff = {
            id: editId,
            name: fullnameInput.value,
            dob: dobInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            department: departmentInput.value,
            position: positionInput.value,
        };
        staffList[indexeditStaffFunction] = newStaff;
        editId = null;
    } else {
        const newStaff = {
            id: "",
            name: fullnameInput.value,
            dob: dobInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            department: departmentInput.value,
            position: positionInput.value,
        }
        staffList.push(newStaff);
        addId();
    };
    localStorage.setItem("staffList", JSON.stringify(staffList));
    closeModal();
    refreshTable();
    clearInput();
});
refreshTable();

function delStaffFunction(id) {
    const index = staffList.findIndex((item) => item.id === id);
    staffList.splice(index, 1);
    addId();
    localStorage.setItem("staffList", JSON.stringify(staffList));
    refreshTable();
}

function editStaffFunction(id) {
    const index = staffList.findIndex((item) => item.id === id);
    const staff = staffList[index];
    fullnameInput.value = staff.name;
    dobInput.value = staff.dob;
    phoneInput.value = staff.phone;
    emailInput.value = staff.email;
    departmentInput.value = staff.department;
    positionInput.value = staff.position;
    editId = id;
    console.log(staffList);
    refreshTable();
}



function addId() {
    for (let k = 0; k < staffList.length; k++) {
        staffList[k].id = k + 1;
    }
}