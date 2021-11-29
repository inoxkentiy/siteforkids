let login=document.querySelector("#login")
let password=document.querySelector("#password")
let button1 = document.querySelector("#butn");

let personArray =JSON.parse(localStorage.getItem("personArray"));
butn_delete
if (personArray === null) {
    personArray = [];
}

button1.addEventListener('click', function () {
    let loginInp=login.value;
    let passwordInp=password.value;
  
            let data_of_person={
                Login:loginInp,
                password:passwordInp
            }
   
        personArray.push(data_of_person)
        console.log(personArray)
    //     alert("Вы успешно авторизовались")
       personArray=localStorage.setItem("personArray", JSON.stringify(personArray))
        // location.href="index.html"
        
    } 
)
   let login_second=document.querySelector("#login_log")
   let password_second=document.querySelector("#password_log")

   let butn_log=document.querySelector("#butn_log")
let butn_delete=document.querySelector("#butn_delete")
   butn_log.addEventListener("click", () =>{ 
       let login_second_value=login_second.value;
       let password_second_value=password_second.value;
    
         if(login.value==login_second_value && password.value==password_second_value)
        alert("Вы успешно вошли")
   
    })

   butn_delete.addEventListener('click', () => {
       localStorage.removeItem("#p")
   })