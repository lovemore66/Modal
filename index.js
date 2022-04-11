let allBtns = document.querySelectorAll('.allbtn');
let overlay = document.querySelector(".overlay");
let model = document.querySelector(".model");
let close = document.querySelector(".btn")
allBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        overlay.classList.remove('hidden')
        model.classList.remove('hidden')
    })
})

close.addEventListener('click', closeFunc)
overlay.addEventListener('click', closeFunc)

function closeFunc() {
    overlay.classList.add("hidden")
    model.classList.add('hidden')
}

// SHOW PASSWORD

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});