let receiveBtn = document.getElementById('receive'),
    inputName = document.getElementsByClassName('contactform_name')[0],
    text = document.getElementsByName('message')[0],
    modal = document.querySelector('.modal'),
    buttonClose = document.querySelector('.close');


    receiveBtn.addEventListener('click', function(){
        modal.style.display = 'block';
    })

    buttonClose.addEventListener('click', function(){
        modal.style.display = 'none';
    })

    inputName.addEventListener('input', function(){
        if (inputName.value != "") {
        text.value = "Меня зовут " + inputName.value + ". Я бы хотела задать вопрос: ";
        }
        else {
        text.value = "";
        }
    })

