let entranceLogin=document.querySelector('.entrance_login');
let entranceRegister=document.querySelector('.entrance_register');



if(localStorage.getItem('loggedInUser')){
    window.location.href='./index.html'
}


entranceLogin.addEventListener('click',()=>{
window.location.href="./login.html"



})
entranceRegister.addEventListener('click',()=>{
    window.location.href="./register.html"
})