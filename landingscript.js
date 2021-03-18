const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
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

  document.getElementById("logo-title").style.color = "white";
});
