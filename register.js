let gologin = document.querySelector('.login_btn');
let registerName = document.querySelector('.register_name');
let registerEmail = document.querySelector('.register_email');
let registerPsw = document.querySelector('.register_psw');
let registerReTypePsw = document.querySelector('.register_re_type_psw');
let registerErr = document.querySelector('.register_err')


if(localStorage.getItem('loggedInUser')){
    window.location.href='./index.html'
}






gologin.addEventListener('click', () => {
    window.location.href = './login.html'

})
function regSubmit(e) {
    console.log(e);
    e.preventDefault()

    let checkNewUsers = users.find(a => a.email === registerEmail.value)


    if (checkNewUsers) {
        registerErr.innerHTML = 'Bu istifadeci artiq movcuddur!!!!'
    } else {
        if (registerReTypePsw.value === registerPsw.value) {
            const newUser = {
                id: users.length + 1,
                name: registerName.value,
                email: registerEmail.value,
                password: registerPsw.value
            }
            users.push(newUser)
            localStorage.setItem('users',JSON.stringify(users))
            
            registerErr.innerHTML = 'Qeydiyyat ugurla bitdi!!!!'
        } else {
            registerErr.innerHTML = 'Sifre eyni deyil!!!!!'
        }
    }


}