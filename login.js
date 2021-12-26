const form = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const listUser = JSON.parse(localStorage.getItem("listUser"))
    ? JSON.parse(localStorage.getItem("listUser"))
    : [];
  const check = listUser.findIndex(
    (item) => item.username == username && item.password == password
  );
  localStorage.setItem("userInfo", JSON.stringify(listUser[check]));
  if (check >= 0) {
    window.location.href = "./index.html";
  } else {
    alert("The username or password you entered is incorrect");
  }
});

function register() {
  window.location.href = "./register.html";
}
