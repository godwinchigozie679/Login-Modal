// DEFINE VARABLES
const form = document.getElementById('form');
const cancelIcon = document.getElementById('cancelIcon');
const cancelBtn = document.getElementById('cancelbtn');
const overlay = document.getElementById('overlay');
const login = document.getElementById('login');






 
        

//REMOVE FORMS

        //icon cancel form
    cancelIcon.addEventListener('click', function(){    
    form.style.display = 'none';
    overlay.style.display = 'none';
    

})

     
        //button cancel form

    cancelBtn.addEventListener('click', function(){
        
    form.style.display = 'none';
    overlay.style.display = 'none';    
    preventLoad();

})



//DISPLAY FORM
login.addEventListener('click', function(){
    animateLogin();
    form.style.display = 'block';
    overlay.style.display = 'block';

})

//ADD ANIMATION

function animateLogin(){
    form.classList.add('animate');
}

