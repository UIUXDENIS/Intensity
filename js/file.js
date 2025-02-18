document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", function () {
        let passwordInput = this.previousElementSibling;
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });
});




const form = document.getElementById('formular');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Thank you for our support!  .');
                    form.reset();
                } else {
                    alert('There is a problem. Try again.');
                }
            })
            .catch(() => {
                alert('Wifi error. Try again later.');
            });
    });
} else {
    console.error('A form with this id has not found.');
}


function toggleMenu() {
  const nav = document.querySelector('nav');
  const burgerMenu = document.querySelector('.burger-menu');

  nav.classList.toggle('active');
  burgerMenu.classList.toggle('toggle');
}
