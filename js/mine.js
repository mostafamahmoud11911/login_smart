const usernameInput = document.getElementById("usernameInput");
const userEmailInput = document.getElementById("userEmailInput");
const userPasswordInput = document.getElementById("userPasswordInput");
const signupBtn = document.getElementById("signupBtn");
let userInfo;
if (localStorage.getItem("users") == null) {
  userInfo = [];
} else {
  userInfo = JSON.parse(localStorage.getItem("users"));
}


function signUp() {
  userInputsValidation();
  isExist();
  if (userInputsValidation() == true && isExist() == false) {
    let user = {
      name: usernameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
    };
    userInfo.push(user);
    localStorage.setItem("users", JSON.stringify(userInfo));
    const confirmMsg = document.getElementById("confirmMsg");
    confirmMsg.classList.replace("d-none", "d-block");
    const signin = document.getElementById("signin");
    signin.classList.replace("d-none", "d-block");
  } else {
    const tryAgainMsg = document.getElementById("tryAgainMsg");
    tryAgainMsg.classList.replace("d-none", "d-block");
  }
}



function validationUserName() {
  const usernameAlert = document.getElementById("usernameAlert");
  let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  if (regex.test(usernameInput.value) == true && usernameInput.value !== "") {
    usernameAlert.classList.replace("d-block", "d-none");
    usernameInput.classList.add("is-valid");
    usernameInput.classList.remove("is-invalid");
    return true;
  } else {
    usernameAlert.classList.replace("d-none", "d-block");
    usernameInput.classList.add("is-invalid");
    usernameInput.classList.remove("is-valid");
    return false;
  }
}
function validationUserEmail() {
  const userEmailAlert = document.getElementById("userEmailAlert");
  let regex = /@[a-z]{5,10}(\.com)$/;
  if (regex.test(userEmailInput.value) == true && userEmailInput.value !== "") {
    userEmailAlert.classList.replace("d-block", "d-none");
    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    return true
  } else {
    userEmailAlert.classList.replace("d-none", "d-block");
    userEmailInput.classList.add("is-invalid");
    userEmailInput.classList.remove("is-valid");
    return false
  }
}
function validationUserPassword() {
  const userPasswordAlert = document.getElementById("userPasswordAlert");
  let regex = /^.{5,15}$/;
  if (
    regex.test(userPasswordInput.value) == true &&
    userPasswordInput.value !== ""
  ) {
    userPasswordAlert.classList.replace("d-block", "d-none");
    userPasswordInput.classList.add("is-valid");
    userPasswordInput.classList.remove("is-invalid");
    return true;
  } else {
    userPasswordAlert.classList.replace("d-none", "d-block");
    userPasswordInput.classList.add("is-invalid");
    userPasswordInput.classList.remove("is-valid");
    return false;
  }
}
function isExist() {
  let accountExistMsg = document.getElementById("accountExistMsg");
  for (let i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].name.toLowerCase() == usernameInput.value.toLowerCase() ||
      userInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase()
    ) {
      accountExistMsg.classList.replace("d-none", "d-block");
      usernameInput.classList.remove("is-valid");
      userEmailInput.classList.remove("is-valid");
      userPasswordInput.classList.remove("is-valid");
      return true;
    }
  }
  return false;
}

function userInputsValidation() {
  validationUserName(), validationUserEmail(), validationUserPassword();
  if (
    validationUserName() == true &&
    validationUserEmail() == true &&
    validationUserPassword() == true
  ) {
    return true;
  } else {
    return false;
  }
}
/*************************login**********************************/ 



var username = localStorage.getItem("sessionUsername");
function login() {
  let loginEmail = document.getElementById("loginEmail");
  let loginPassword = document.getElementById("loginPassword");
  let loginBtn = document.getElementById("loginBtn");
  let wrongMsg = document.getElementById("wrongMsg");

  if (loginEmail.value == "" || loginPassword.value == "") {
    let fillMsg = document.getElementById("fillMsg");
    fillMsg.classList.replace("d-none", "d-block");
    return false;
  }

  for (var i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() &&
      userInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase()
    ) {
      localStorage.setItem("sessionUsername", userInfo[i].name);
      loginBtn.setAttribute("href", "welcome.html");
    } else {
      wrongMsg.classList.replace("d-none", "d-block");
    }
  }
}
function displayWelcomeUser() {
  document.getElementById("username").innerHTML = "Welcome " + username;
}

function logout() {
  localStorage.removeItem("sessionUsername");
}