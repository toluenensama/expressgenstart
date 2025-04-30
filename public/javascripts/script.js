document.getElementById('emailSubmit').addEventListener('click', (event) =>{
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailErrorText');
    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
        emailError.classList.remove('hidden');
        emailInput.classList.add('border-light-red');
        emailInput.classList.remove('ring-background')
        event.preventDefault();
    } else {
        emailError.classList.add('hidden');
        emailInput.classList.add('border-gray-custom')
        emailInput.classList.remove('ring-accent');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const theyear = new Date().getFullYear()

document.getElementById('date').innerHTML = "&copy" + " " + theyear + " toluene, All rights reserved"