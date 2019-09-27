function animatedForm(){
    const arrows = document.querySelectorAll('.fa-arrow-circle-right');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', ()=>{

            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextItem = parent.nextElementSibling;

            //check validation
            if(input.type === 'text' && validateUser(input)){
                nextForm(parent, nextItem);
            }
            else if(input.type === "email" && validateEmail(input)){
                nextForm(parent, nextItem);
            }
            else if(input.type === "password" && validateUser(input)){
                nextForm(parent, nextItem);
            }
            else{
                parent.style.animation = 'shake 0.5s ease';
            }

            parent.addEventListener('animationend', () =>{
                parent.style.animation = "";
            });

        });

    });
}

function validateUser(user){
    if(user.value.length < 6){
        verification('rgb(189, 87, 87)');
        errorMessage(1, 'The Characters is not enough');
        console.log("The Characters isn't enough");
       
    }
    else{
        verification('rgb(87, 189, 130)');
        errorMessage(0, 'OK');
        return true;
    }
}

function validateEmail(email){
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(checkEmail.test(email.value)){
        verification('rgb(87, 189, 130)');
        errorMessage(0, 'Ok');

        return true;
    }
    else{
        verification('rgb(189, 87, 87)');
        errorMessage(1, 'The email is incorrect');

    }
}

function verification(color){
    document.body.style.backgroundColor = color;
}

function errorMessage(opacity, text){
    document.querySelector('.error-message').style.opacity = opacity;
    document.querySelector('.error-message p').textContent = text;
}

function nextForm (parent, nextItem){
    parent.classList.add('innacitive');
    parent.classList.remove('active');

    nextItem.classList.add('active');
}

animatedForm();