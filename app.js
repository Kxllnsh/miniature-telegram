const form = document.getElementById('form');
const errorMessage = document.querySelector('.error-message');
const email = document.querySelector('.email');


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        email: email.value
    }
    //validation
    emailValidation();

    let isEmailValid = emailValidation();

    let checkInputs = isEmailValid;



    //submit to server
    if (checkInputs){

    }



});

function emailValidation(){
    if (email.value === '' || email.value === null){
        //add and remove classes to the input
        errorMessage.style.visibility = 'visible';
        return false
    }else{
        errorMessage.style.visibility = 'hidden'
        return true
    }
}

email.addEventListener('input', ()=>{
    emailValidation();
});