

let btn = document.getElementById("Create")

btn.addEventListener("click",()=>{
    let user = document.getElementById("user").value
let email = document.getElementById("email").value
let pass = document.getElementById("Password").value
console.log(user,email,pass);
if(user !== "" && email !== "" && pass !== ""){

    window.location.href = 'index.html'
// alert("Account created successfully")
}else{
    alert("enter your information")
}





localStorage.setItem("name",user)
localStorage.setItem("email",email)
localStorage.setItem("password",pass)
})
// console.log("Sasad");
