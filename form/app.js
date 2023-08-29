import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword}  from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
const auth = getAuth();

const signup = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((resolve) => {
        alert("Successfully Signup!!");
    }).catch((reject) => {
        alert("Error " + reject.message);
    })
}

let signbtn = document.getElementById("btnsignup");
signbtn.addEventListener('click', signup);

const login = () => {
    let emaill = document.getElementById("emaill");
    let passwordd = document.getElementById("passwordd");

    signInWithEmailAndPassword(auth, emaill.value, passwordd.value)

    .then((resolve) => {
        alert("Successfully Login!!");
        window.location = "https://meet.google.com/";
    }).catch((reject) => {
        alert("Error");
    });
}

let loginbtn = document.getElementById("btnlogin");
loginbtn.addEventListener("click", login);
