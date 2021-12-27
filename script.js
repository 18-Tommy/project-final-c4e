const fullname = JSON.parse(localStorage.getItem("userInfo")).fullname;
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
const modal = document.querySelector(".modal-box");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".close");
const cancelBtn = document.querySelector("#cancelBtn");
const addBtn = document.querySelector("#addBtn");
const searchInput = document.querySelector("#search-bar");
const sortNo = document.querySelector(".sorting-no");
const sortName = document.querySelector(".sorting-name");
const sortDob = document.querySelector(".sorting-dob");
const sortPhone = document.querySelector(".sorting-phone");
const sortEmail = document.querySelector(".sorting-email");
const sortDepartment = document.querySelector(".sorting-department");
const sortPos = document.querySelector(".sorting-pos");
const userFullname = document.querySelector("#user-fullname");
userFullname.innerHTML = `Hello: ${fullname}`;

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    refreshTable(staffList);
});

let stage = {
    columnName: "",
    code: 0,
}

sortNo.addEventListener("click", function() {
    stage.columnName = "id"
    if (stage.code == 1) {
        staffList.sort(sortNoAsc);
        stage.code = 2;
        document.querySelector(".sorting-no .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-no .desc").setAttribute("style", "visibility: hidden");
        refreshTable(staffList);
    } else if (stage.code == 2){
        staffList.reverse();
        stage.code = 0;
        document.querySelector(".sorting-no .asce").setAttribute("style", "visibility: hidden");
        document.querySelector(".sorting-no .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    } else {
        staffList.sort(sortNoAsc);
        stage.code = 1;
        document.querySelector(".sorting-no .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-no .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    }
});

function sortNoAsc(firstEl, secondEl) {
    if (firstEl.id < secondEl.id) {
        return -1;
    }
    if (firstEl.id > secondEl.id) {
        return 1;
    }
    return 0;
}

sortName.addEventListener("click", function() {
    stage.columnName = "name";
    if (stage.code == 1) {
        staffList.sort(sortNameAsc);
        stage.code = 2;
        document.querySelector(".sorting-name .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-name .desc").setAttribute("style", "visibility: hidden");
        refreshTable(staffList);
    } else if (stage.code == 2) {
        staffList.reverse(sortNameAsc);
        stage.code = 0;
        document.querySelector(".sorting-name .asce").setAttribute("style", "visibility: hidden");
        document.querySelector(".sorting-name .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    } else {
        staffList.sort(sortNoAsc);
        stage.code = 1;
        document.querySelector(".sorting-name .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-name .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
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

sortDob.addEventListener("click", function() {
    stage.columnName = "dob"
    if (stage.code == 1) {
        staffList.sort(sortDobAsc);
        stage.code = 2;
        document.querySelector(".sorting-dob .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-dob .desc").setAttribute("style", "visibility: hidden");
        refreshTable(staffList);
    } else if (stage.code == 2) {
        staffList.reverse(sortDobAsc);
        stage.code = 0;
        document.querySelector(".sorting-dob .asce").setAttribute("style", "visibility: hidden");
        document.querySelector(".sorting-dob .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    } else {
        staffList.sort(sortNoAsc);
        stage.code = 1;
        document.querySelector(".sorting-dob .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-dob .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    }
});

function sortDobAsc(firstEl, secondEl) {
    if (firstEl.dob < secondEl.dob) {
        return -1;
    }
    if (firstEl.dob > secondEl.dob) {
        return 1;
    }
    return 0;
}

sortPhone.addEventListener("click", function() {
    stage.columnName = "phone"
    if (stage.code == 1) {
        staffList.sort(sortPhoneAsc);
        stage.code = 2;
        document.querySelector(".sorting-phone .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-phone .desc").setAttribute("style", "visibility: hidden");
        refreshTable(staffList);
    } else if (stage.code == 2) {
        staffList.reverse(sortPhoneAsc);
        stage.code = 0;
        document.querySelector(".sorting-phone .asce").setAttribute("style", "visibility: hidden");
        document.querySelector(".sorting-phone .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    } else {
        staffList.sort(sortNoAsc);
        stage.code = 1;
        document.querySelector(".sorting-phone .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-phone .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    }
});

function sortPhoneAsc(firstEl, secondEl) {
    if (firstEl.phone < secondEl.phone) {
        return -1;
    }
    if (firstEl.phone > secondEl.phone) {
        return 1;
    }
    return 0;
}

sortEmail.addEventListener("click", function() {
    stage.columnName = "email"
    if (stage.code == 1) {
        staffList.sort(sortEmailAsc);
        stage.code = 2;
        document.querySelector(".sorting-email .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-email .desc").setAttribute("style", "visibility: hidden");
        refreshTable(staffList);
    } else if (stage.code == 2) {
        staffList.reverse(sortEmailAsc);
        stage.code = 0;
        document.querySelector(".sorting-email .asce").setAttribute("style", "visibility: hidden");
        document.querySelector(".sorting-email .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    } else {
        staffList.sort(sortNoAsc);
        stage.code = 1;
        document.querySelector(".sorting-email .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-email .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    }
});

function sortEmailAsc(firstEl, secondEl) {
    if (firstEl.email < secondEl.email) {
        return -1;
    }
    if (firstEl.email > secondEl.email) {
        return 1;
    }
    return 0;
}

sortDepartment.addEventListener("click", function() {
    stage.columnName = "department"
    if (stage.code == 1) {
        staffList.sort(sortDepartmentAsc);
        stage.code = 2;
        document.querySelector(".sorting-department .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-department .desc").setAttribute("style", "visibility: hidden");
        refreshTable(staffList);
    } else if (stage.code == 2){
        staffList.reverse(sortDepartmentAsc);
        stage.code = 0;
        document.querySelector(".sorting-department .asce").setAttribute("style", "visibility: hidden");
        document.querySelector(".sorting-department .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    } else {
        staffList.sort(sortNoAsc);
        stage.code = 1;
        document.querySelector(".sorting-department .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-department .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    }
});

function sortDepartmentAsc(firstEl, secondEl) {
    if (firstEl.department < secondEl.department) {
        return -1;
    }
    if (firstEl.department > secondEl.department) {
        return 1;
    }
    return 0;
}

sortPos.addEventListener("click", function() {
    stage.columnName = "position"
    if (stage.code == 1) {
        staffList.sort(sortPosAsc);
        stage.code = 2;
        document.querySelector(".sorting-pos .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-pos .desc").setAttribute("style", "visibility: hidden");
        refreshTable(staffList);
    } else if (stage.code == 2) {
        staffList.reverse(sortPosAsc);
        stage.code = 0;
        document.querySelector(".sorting-pos .asce").setAttribute("style", "visibility: hidden");
        document.querySelector(".sorting-pos .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    } else {
        staffList.sort(sortNoAsc);
        stage.code = 1;
        document.querySelector(".sorting-pos .asce").setAttribute("style", "visibility: initial");
        document.querySelector(".sorting-pos .desc").setAttribute("style", "visibility: initial");
        refreshTable(staffList);
    }
});

function sortPosAsc(firstEl, secondEl) {
    if (firstEl.position < secondEl.position) {
        return -1;
    }
    if (firstEl.position > secondEl.position) {
        return 1;
    }
    return 0;
}

function searchFunction() {
    const searchValue = searchInput.value;
    const option = document.querySelector("#search-option").value;
    const searchArr = staffList.filter(function(item) {
        return item[`${option}`].toLowerCase().includes(searchValue.toLowerCase());
    });
    refreshTable(searchArr);
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

function refreshTable(array) {
    table.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const staff = array[i];
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
        delIcon.setAttribute("src", "./img/icon-del.png");
        delBtn.appendChild(delIcon);
        delBtn.style.marginRight = "10px"
        delBtn.addEventListener("click", function () {
            delStaffFunction(staff.id);
        })

        let editIcon = document.createElement("img");
        editIcon.setAttribute("style", "width: 20px", "height: 20px");
        editIcon.setAttribute("src", "/img/icon-edit.png");
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
    refreshTable(staffList);
    clearInput();
});
refreshTable(staffList);

function delStaffFunction(id) {
    const index = staffList.findIndex((item) => item.id === id);
    staffList.splice(index, 1);
    addId();
    localStorage.setItem("staffList", JSON.stringify(staffList));
    refreshTable(staffList);
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
    refreshTable(staffList);
}

function addId() {
    for (let k = 0; k < staffList.length; k++) {
        staffList[k].id = k + 1;
    }
}