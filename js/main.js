const openDown = document.querySelectorAll('.open-down');
const cookieClose = document.querySelector('.cookie__close');
const categoreOpen = document.querySelector('.categore_open');
const mouseLi = document.querySelectorAll('.categore_nav .mouse');

if(cookieClose) {
    cookieClose.addEventListener('click', function() {
        document.querySelector('.cookie').classList.add('close');
    });
}

for(let i = 0; i < openDown.length; i++) {
    openDown[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}

categoreOpen.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__categore_down').classList.toggle('active');
    for(let i = 0; i < mouseLi.length; i++) {
        mouseLi[i].classList.remove('active');
    };
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