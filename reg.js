let button = document.querySelector("#button");
button.addEventListener('click', function () {
  let login = document.querySelector("#login").value;
  let password = document.querySelector("#password").value;
  localStorage.setItem("name", (login));
  localStorage.setItem("password", (password));
  if (login === "") {
    alert("Вы не ввели логин,ошибка")
  }
  let Account = {
    name: login,
    password: password
  }
  let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));
  if (arrayAccount === null) {
    arrayAccount = [];
  }
  let counter = JSON.parse(localStorage.getItem("counter"));
  if (counter === null) {
    counter = [];
  }
  arrayAccount.push(Account);
  localStorage.setItem("arrayAccount", JSON.stringify(arrayAccount));
  console.log(arrayAccount)
  localStorage.setItem("counter", JSON.stringify(counter));
});

let button_log = document.querySelector("#button_log")
button_log.addEventListener('click', function () {
  let login_sec = document.querySelector("#login_sec").value;
  let password_sec = document.querySelector("#password_sec").value;
  localStorage.setItem("name2", (login_sec));
  localStorage.setItem("password2", (password_sec));
  if (login_sec === localStorage.getItem("name") && password_sec === localStorage.getItem("password")) {
    console.log("Вы успешно вошли")
    alert("Вы успешно вошли")
    location.href = "index.html"
  }
  else {
    alert("Вы не ввели логин,ошибка")
    location.href = "reg.html"
  }
});

let buttonDelete = document.querySelector("#button_del")
buttonDelete.addEventListener('click', () => {
  localStorage.removeItem("arrayAccount");
  localStorage.removeItem("counter")
})



