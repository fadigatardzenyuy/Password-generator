// var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
function generatePassword() {
    let inputLenght = document.querySelector("#number").value;

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < inputLenght; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password +=chars. charAt(randomNumber);
    }
    document.querySelector("#Password").value=password



}

// alert(generatePassword())

let btn = document.querySelector(".button");
btn.addEventListener("click", generatePassword);