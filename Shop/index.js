const header = document.querySelector('header');
const slider = document.querySelector('slider');
const main = document.querySelector('main');
const end = document.querySelector('end');
const login = document.querySelector('login');

const login__menu__button = document.querySelector('.login__menu__button')
const login__or__register__h1 = document.querySelector('.login__or__register__h1')
const register = document.querySelector('.register');
const registers = document.querySelector('.registers');
const close__btn = document.querySelector('.login__menu__close');
const account = document.querySelector('#header__contents__mainContents__content__account');
const password = document.querySelector('#login__menu__password');
const password__checkbox = document.querySelector('.login__menu__hide__checkbox');

close__btn.addEventListener('click', ()=>{
    header.style.display = "block";
    slider.style.display = "none";
    main.style.display = "flex";
    end.style.display = "none";
    login.style.display = "none";
});

account.addEventListener('click', ()=>{
    header.style.display = "none";
    slider.style.display = "none";
    main.style.display = "none";
    end.style.display = "none";
    login.style.display = "flex";
});

password__checkbox.addEventListener('change', ()=>{
    if(password__checkbox.checked){
        password.type = 'text';
    }
    else{
        console.log("hz");
        password.type = 'password';
    }
})

register.addEventListener('click', ()=>{
    
    if(register.innerHTML == 'Register'){
        register.innerHTML = 'Login';
        registers.childNodes[0].nodeValue = 'I have an account | ';
        login__or__register__h1.innerHTML = 'Register';
        login__menu__button.innerHTML = 'Register';
        
    }
    else{
        register.innerHTML = 'Register';
        registers.childNodes[0].nodeValue = "I don't have an account | ";
        login__or__register__h1.innerHTML = 'Login';
        login__menu__button.innerHTML = 'Login';
    }
})

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

