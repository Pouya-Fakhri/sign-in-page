let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signIn = document.querySelector("#submit");
let form = document.querySelector("#form");
email.addEventListener("input", (e) => {

  if (e.target.value === "") {
    email.classList.add("errorBorder");
    email.placeholder = "you dont enter your Email";
  } else {
    email.classList.remove("errorBorder");
  }
});
password.addEventListener("blur", (e) => {
  
  if (e.target.value === "") {
    password.classList.add("errorBorder");
    password.placeholder = "you dont enter your password";
  } else {
    password.classList.remove("errorBorder");
  }
});
form.addEventListener("submit", (e) => {
  const user = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  if (!user.email) alert("you dont enter your Email");
  else if (!user.password) alert("you dont enter your password");
  else alert("you are in");
  
});
