import userInfo from "../users/userInfo.js";

const email = document.getElementById('email');
const passwordField = document.getElementById('password');
const passwordField2 = document.getElementById('password2');
const signUp = document.getElementById('submit');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successMsg = document.getElementById('success');

const submit = (e) => {
    try {
        e.preventDefault();
        let emailExists = false;
        let passwordMatch = false;
        for (const user of userInfo.users) {
            if (email.value === user.email) {
                emailExists = true;
            } else if (email.value !== user.email && passwordField.value === passwordField2.value) {
                passwordMatch = true;
            } else if (email.value !== user.email && passwordField.value !== passwordField2.value) {
                passwordMatch = false;
            } else {
                continue;
            }
        }
        if (emailExists) {
            emailError.style.display = 'block';
            console.log(emailExists);
            return emailExists;
        } else if (!emailExists && !passwordMatch) {
            emailError.style.display = 'none'
            passwordError.style.display = 'block';
            console.log({emailExists, passwordMatch});
            return passwordMatch;
        } else if (!emailExists && passwordMatch) {
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            successMsg.style.display = 'block';
            console.log({emailExists, passwordMatch});
            userInfo.push({email: `${email.value}`, password: `${passwordField.value}`});
            console.log(userInfo.users);
            return passwordMatch;
        }
    }catch(error) {
        console.log(error);
    }
}

signUp.addEventListener('click', submit);