document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("main.json");
        const data = await response.json();
        const products = data.products;

        const container = document.querySelector(".container");
        const templateCard = document.querySelector(".main__card");
        
        if (!templateCard || !container) return;

        container.innerHTML = ""; // Очищаем контейнер перед добавлением новых карт

        products.forEach(product => {
            const newCard = templateCard.cloneNode(true);
            
            newCard.querySelector(".main__card__logo__img").src = `${product.img}`;
            newCard.querySelector(".main__card__price").textContent = `${product.price}$`;
            newCard.querySelector(".main__card__description").textContent = `${product.name} - ${product.specs.base_clock || product.specs.memory}`;
            
            container.appendChild(newCard);
        });
    } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
    }
});

const login__menu__button = document.querySelector('.login__menu__button')
const login__or__register__h1 = document.querySelector('.login__or__register__h1')
const register = document.querySelector('.register');
const registers = document.querySelector('.registers');
const close__btn = document.querySelector('.login__menu__close');
const account = document.querySelector('#header__contents__mainContents__content__account');
const password = document.querySelectorAll('#login__menu__password');
const password__checkbox = document.querySelector('.login__menu__hide__checkbox');

password__checkbox.addEventListener('change', ()=>{
    if(password__checkbox.checked){
        password.type = 'text';
        console.log("a");
    }
    else{
        password.type = 'password';
        console.log('J')
    }
})