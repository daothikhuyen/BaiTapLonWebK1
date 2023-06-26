let isLogin = JSON.parse(localStorage.getItem("isLogin"));

const btnLogin = document.querySelector('.btn-login');
const btnLogout = document.querySelector('.btn-logout');
const btnRegister = document.querySelector('.btn-register');
const icCart  = document.querySelector('.ic-cart');

if(isLogin) {
    btnLogin.classList.add("hidden");
    btnRegister.classList.add("hidden");
} else {
    btnLogout.classList.add("hidden");
}

function handleLogout() {
    localStorage.setItem("isLogin", false);
}