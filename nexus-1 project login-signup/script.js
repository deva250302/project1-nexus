

const btn = document.querySelector(".side-by-side-container");
const loginform = document.getElementById("Login-form");
const signupform = document.getElementById("Signup-form");
const loginbtn = document.querySelector(".login-button");
const signupnbtn = document.querySelector(".signup-button");
const heading = document.querySelector(".heading");
const loginsub=document.getElementById("loginsubmit");

btn.addEventListener("click", function (event) {
    if (event.target.classList.contains("login-button")) {
        document.querySelector(".heading").innerHTML = ""

        loginform.style.display = "block";
        signupform.style.display = "none";

        signupnbtn.style.background = "#c1bfbf";
        loginbtn.style.background = "#3494e6";
        resetForm(loginform);
    } 
     if (event.target.classList.contains("signup-button")) {
        document.querySelector(".heading").innerHTML = ""
        loginbtn.style.background = "#c1bfbf";
        signupnbtn.style.background = "#3494e6";
        // h1.innerHTML="SIGN-UP";


        signupform.style.display = "block";
        loginform.style.display = "none";
        resetForm(signupform);

    }
});


async function validateSignupForm(event) {
    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password1 = document.getElementById('password2').value;
    var confirmPassword= document.getElementById('confirmPassword').value;
    var passwordError = document.getElementById('passwordError');

    // Reset any previous error messages
    passwordError.innerText = '';
    

    if (username.trim() === '' || email.trim() === '' || password1.trim() === '' || confirmPassword.trim() === '') {
        alert('All fields must be filled out');
        event.preventDefault();
        return false; // Prevent form submission
    }

    if (password1 !== confirmPassword) {
        passwordError.innerText = 'Passwords do not match';
        event.preventDefault();
        return false; // Prevent form submission
    }
    event.preventDefault();
    document.querySelector(".heading").innerHTML = "Account created!"
    heading.style.display = "block";
    
    return true;
   

}
loginsub.addEventListener("click", function () {
    const username = document.getElementById('login-username').value;
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('password1').value;

    if(username.trim() !== '' && email.trim() !== '' && password.trim() !== ''){

        heading.innerHTML = "You have logged in successfully!";
        resetForm(loginform);
    }
});



function resetForm(form) {
    // Reset form fields
    form.reset();
    // Reset any additional error messages or styling
    document.getElementById("passwordError").innerText = "";
   
}


