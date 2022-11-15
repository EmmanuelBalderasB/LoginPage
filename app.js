import  userInfo  from "./users/userInfo.js";

const email = document.getElementById('email');
const Password = document.getElementById('password');
const checkbox = document.getElementById('rememberMe');
const signIn = document.getElementById('submit');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

const submit = (e) => {
    try {
        e.preventDefault();
        let emailFound = false;
        let passwordMatches = false;
        for (const user of userInfo.users) {
            if (email.value === user.email && Password.value === user.password) {
                emailFound = true;
                passwordMatches = true;
            } else if (email.value === user.email && Password.value !== user.password) {
                emailFound = true;
                passwordMatches = false;
            } else {
                continue;
            }
        }
        if(emailFound && passwordMatches) {
            console.log({emailFound, passwordMatches});
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            return emailFound;
        } else if (!emailFound) {
            emailError.style.display = 'block';
            console.log({emailFound});
            return emailFound;
        } else if (emailFound && !passwordMatches) {
            passwordError.style.display = 'block';
            console.log({emailFound, passwordMatches});
            return passwordMatches;
        }
    }catch(error) {
        console.log(error);
    }
}

signIn.addEventListener('click', submit);