const top_dec = document.getElementById("decorative-top");
let decorative_top = 59;

const bottom_dec = document.getElementById("decorative-bottom");
let decorative_bottom = 900;

top_dec.style.top = String(window.screenY - window.scrollY - decorative_top) + "px";

addEventListener("scroll", () => {
    top_dec.style.top = String(window.screenY - window.scrollY - decorative_top) + "px";
});

let login_button = document.getElementById("login-button");
let close_form = document.getElementById("close-form");
let login_form = document.getElementById("login");

close_form.addEventListener("click", () => {
    login_form.style.display = "none";
});

login_button.addEventListener("click", () => {
    login_form.style.display = "block";
});