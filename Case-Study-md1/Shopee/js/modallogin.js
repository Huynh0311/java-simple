const registerBtns = document.querySelector('.js-register')
const modalRegister = document.querySelector('.js-modal--register')
const modalCloses = document.querySelector('.js-btn-close-register')
const modalClosess = document.querySelector('.js-btn-close-login')
const loginBtns = document.querySelector('.js-login')
const modalLogin = document.querySelector('.js-modal--login')

// Hiển thị modal thêm class open
function showFormRegister() {
    modalRegister.classList.add('open')
}

// Tắt modal xóa class open
function HideFormRegister() {
    modalRegister.classList.remove('open')
}

//login-btn và nghe hành vi click
registerBtns.addEventListener('click', showFormRegister)
//close-btn và nghe hành vi click
modalCloses.addEventListener('click', HideFormRegister)


function showFormLogin() {
    modalLogin.classList.add('open')
}
function HideFormLogin() {
    modalLogin.classList.remove('open')
}

loginBtns.addEventListener('click', showFormLogin)

modalClosess.addEventListener('click', HideFormLogin)