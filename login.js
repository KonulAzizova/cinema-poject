let goRegister=document.querySelector('.register_btn');
let loginEmail=document.querySelector('.login_email');
let loginPsw=document.querySelector('.login_psw');
let loginErr=document.querySelector('.login_err');





goRegister.addEventListener('click',()=>{
    window.location.href='./register.html';
})
function loginSubmit(e){
    e.preventDefault()

    let checkUsers=users.find(a=>a.email===loginEmail.value);
    if(checkUsers){
        if(checkUsers.password===loginPsw.value){
            window.location.href='./index.html'
            console.log(checkUsers);
            localStorage.setItem('loggedInUser',JSON.stringify(checkUsers));
        }else{
            loginErr.innerHTML='sifre yanlisdir!!!!!!'
        }
    }else{
        loginErr.innerHTML='Istifadeci movcud deyil!!!!'
    }




}
