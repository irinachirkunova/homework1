window.addEventListener('DOMContentLoaded', function(){
    let products = document.querySelectorAll('.product'),
        buttons = document.getElementsByTagName('button'),
        buttonOpen = document.getElementsByClassName('open')[0];
        console.log(buttonOpen);


        function createCard(){
            let card = document.createElement('div'),
                field = document.createElement('div'),
                heading = document.createElement('h2'),
                close = document.createElement('button');

                card.classList.add('cart');
                field.classList.add('cart-field');
                close.classList.add('close');

                heading.textContent = "В нашей корзине: ";
                close.textContent = "Закрыть";

                document.body.appendChild(card);
                card.appendChild(heading);
                card.appendChild(field);
                card.appendChild(close);

        }
        createCard();

        let field = document.querySelector('.cart-field'),
            card = document.querySelector('.cart'),
            close = document.querySelector('.close');

            for(let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', function(){
                    //создали копию карточки
                    let item = products[i].cloneNode(true),
                        btn = item.querySelector('button');
                    let buttonCancel = document.createElement('button');
                    buttonCancel.textContent = "Удалить";
                    item.appendChild(buttonCancel);

                        btn.remove();
                        field.appendChild(item);
                        products[i].remove();

                    function cancel() {
                        item.remove();
                    }

                    buttonCancel.addEventListener('click', cancel);


                })

            }

            function openCard() {
                card.style.display = "block"
            };
            function closeCard() {
                card.style.display = "none"
            };

           

            buttonOpen.addEventListener('click', openCard);
            close.addEventListener('click', closeCard);

            
})