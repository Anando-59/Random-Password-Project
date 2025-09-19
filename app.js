let input = document.querySelector("input")
let button = document.querySelector("button")


const randomPassword = ()=>{
 
  let Upercase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let Lowercase = " abcdefghijcklmnopqrst"
  let number = " 0123456789"
  let spesal = " !@#$%^&*(){}<>"
  
  let password = "";
   let All = Upercase+ Lowercase + number + spesal ;

   let length = 12;
   
    while(password.length < length){
      password += All[Math.floor(Math.random()*All.length)]
     }

   password += Upercase[Math.floor(Math.random()*Upercase.length)]
   password += Lowercase[Math.floor(Math.random()*Lowercase.length)]
   password += number[Math.floor(Math.random()*number.length)]
   password += spesal[Math.floor(Math.random()*spesal.length)]
   input.value = password
}

button.addEventListener("click", randomPassword )