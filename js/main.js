const cookieClose = document.querySelector('.cookie__close');
const categoreOpen = document.querySelector('.categore_open');
const mouseLi = document.querySelectorAll('.categore_nav .mouse');

if(cookieClose) {
    cookieClose.addEventListener('click', function() {
        document.querySelector('.cookie').classList.add('close');
    });
};

categoreOpen.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__categore_down').classList.toggle('active');
    for(let i = 0; i < mouseLi.length; i++) {
        mouseLi[i].classList.remove('active');
    };
    document.querySelector('.mobile-catalog').classList.toggle('active');
});

document.querySelector('.mobile__catalog').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.mobile-catalog').classList.toggle('active');

    document.querySelector('.mobile_burgir').classList.remove('active');
    document.querySelector('.header__bottom').classList.remove('active');
});
document.querySelector('.mobile_burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__bottom').classList.toggle('active');

    document.querySelector('.mobile__catalog').classList.remove('active');
    document.querySelector('.mobile-catalog').classList.remove('active');
});

for(let i = 0; i < mouseLi.length; i++) {
    mouseLi[i].classList.remove('active');
    mouseLi[i].addEventListener('mouseover', function() {
        if(!mouseLi[i].classList.contains('active')) {
            for(let k = 0; k < mouseLi.length; k++) {
                mouseLi[k].classList.remove('active');
            };
        };
        mouseLi[i].classList.add('active');
    });
};

const addProduct = document.querySelectorAll('.hits__item button');
for(let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', function() {
        setTimeout(function() {
            addProduct[i].classList.toggle('active');
        }, 180);
    });
}

document.querySelector('.footer_phone').addEventListener('click', function() {
    this.classList.toggle('active');
});

// Modal Reg
document.querySelector('#auth-open').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#auth').classList.add('active');
});
document.querySelector('.mobile__user').addEventListener('click', function() {
    document.querySelector('#auth').classList.add('active');
});

document.querySelector('#tab_reg').addEventListener('click', function() {
    this.classList.add('active');
    document.querySelector('.modal__reg_reg').classList.add('active');
    document.querySelector('#tab_auth').classList.remove('active');
    document.querySelector('.modal__reg_auth').classList.remove('active');
});
document.querySelector('#tab_auth').addEventListener('click', function() {
    this.classList.add('active');
    document.querySelector('.modal__reg_auth').classList.add('active');
    document.querySelector('#tab_reg').classList.remove('active');
    document.querySelector('.modal__reg_reg').classList.remove('active');
});
const modalClose = document.querySelectorAll('.modal .close');
for(let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function() {
        document.querySelector('#auth').classList.remove('active');
    });
}