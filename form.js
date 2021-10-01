// const btn = document.querySelector('#btnSubmit');
// btn.addEventListener('click', (event) => {
//     // alert(validateForm('color'));
//     validateForm();
// });

// function validateForm() {
//     debugger;
//     const form = document.getElementById('form');
//     const email = form['email'].value;
//     const terms = form['00N5e00000eRNZb'].value;
//     const checkboxes = document.querySelectorAll(`input[name="${'00N5e00000eRNZb'}"]:checked`);

//     if(!checkboxes.length)
//     {
//         alert('pongale check');
//         throw new Error();
//         return false
//     }

//   }

const email = document.getElementById('email')
const mobile = document.getElementById('00N5e00000bDrUC')
const error = document.getElementById('error')
const errorInput = document.getElementById('errorInput')
const messageCaptcha = document.getElementById('messageCaptcha')



var autorizar = document.getElementById('00N5e00000eRNZb')
autorizar.addEventListener('change', function(event){
    console.log(event.target.checked)
    if(event.target.checked === false){
        errorInput.style.display = "block"
    }else if(event.target.checked === true){
        errorInput.style.display = "none"
    }
} )


function sendForm()
{
    console.log('enviando formulario')

    const messageError = [];

    if(email.value === "" && mobile.value === ""){
        messageError.push('Ingresa tu celular o email');
        error.innerHTML = messageError;
    
        return false
    }

    let captchaResponse = grecaptcha.getResponse();
    
    if(captchaResponse.length == 0){
        //no válida 
        messageCaptcha.style.display = "block";
        return false; 
    } else {
        //captcha válida
        messageCaptcha.style.display = "none";
    }
    
    return true

}





