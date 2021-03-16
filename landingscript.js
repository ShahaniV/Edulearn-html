const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const user_signup_btn = document.querySelector("#user-sign-up-button");
const user_login_btn = document.querySelector("#user-login-button");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  var userSignup = document.getElementsByClassName("user-sign-up-form");
  for (var i = 0; i < userSignup.length; i += 1) {
    userSignup[i].style.display = "none";
  }
  for (var i = 0; i < sign_in_btn.length; i += 1) {
    sign_in_btn[i].style.display = "none";
  }
  myFunction();
  document.getElementById("logo-title").style.color = "black";
});

function myFunction() {
  var element = document.getElementById("logo-title");
  element.classList.add("logo-heading-h1");
}

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");

  var userLogin = document.getElementsByClassName("sign-in-form");
  for (var i = 0; i < userLogin.length; i += 1) {
    userLogin[i].style.display = "flex";
  }

  document.getElementById("logo-title").style.color = "white";
});

user_login_btn.onclick = function () {
  var userLogin = document.getElementsByClassName("sign-in-form");
  for (var i = 0; i < userLogin.length; i += 1) {
    userLogin[i].style.display = "flex";
  }
  var userSignup = document.getElementsByClassName("user-sign-up-form");
  for (var i = 0; i < userSignup.length; i += 1) {
    userSignup[i].style.display = "none";
  }
};

user_signup_btn.onclick = function () {
  var userSignup = document.getElementsByClassName("user-sign-up-form");
  for (var i = 0; i < userSignup.length; i += 1) {
    userSignup[i].style.display = "flex";
  }
  var userLogin = document.getElementsByClassName("sign-in-form");
  for (var i = 0; i < userLogin.length; i += 1) {
    userLogin[i].style.display = "none";
  }
};
