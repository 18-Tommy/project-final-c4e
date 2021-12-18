let staffList = [
    {
        id: 1,
        name: "Ada",
        dob: "1990-10-10",
        phone: "C",
        email: "D",
        department: "E",
        position: "F",
    },
    {
        id: 2,
        name: "Za",
        dob: "1991-11-11",
        phone: "D",
        email: "E",
        department: "F",
        position: "G",
    },
    {
        id: 3,
        name: "X",
        dob: "1992-12-12",
        phone: "z",
        email: "t",
        department: "ge",
        position: "sue",
    },
];
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
const searchInput = document.querySelector("#searchBar");
const fn = document.querySelector("#FN");

fn.addEventListener("click", function() {
    staffList.sort(sortAsc);
    refreshTable();
});

function sortAsc(firstEl, secondEl) {
    if (firstEl.name < secondEl.name) {
        return -1;
    }
    if (firstEl.name > secondEl.name) {
        return 1;
    }
    return 0;
}

function searchFunction() {
    const searchValue = searchInput.value;
    const option = document.querySelector("#search-option").value;
    const res = staffList.filter(function(item) {
        return item[`${option}`].includes(searchValue);
    });
    refreshTable();
    console.log(res);
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

        let delIcon = document.createElement('img')
        delIcon.setAttribute('style', 'width: 20px; height: 20px')
        delIcon.setAttribute('src', './icon-del.png')
        delBtn.appendChild(delIcon)

        delBtn.addEventListener("click", function () {
            delStaffFunction(staff.id);
        })

        editBtn.innerHTML = "Edit";
        editBtn.addEventListener("click", openModal);
        editBtn.addEventListener("click", function () {
            editStaffFunction(staff.id);
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
    }
    closeModal();
    refreshTable();
    clearInput();
});

console.log(staffList);

function delStaffFunction(id) {
    const index = staffList.findIndex((item) => item.id === id);
    staffList.splice(index, 1);
    addId();
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
    refreshTable();
}

function addId() {
    for (let k = 0; k < staffList.length; k++) {
        staffList[k].id = k + 1;
    }
}

refreshTable();