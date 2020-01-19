document.querySelectorAll('.accordeon__title').forEach(item => {
    item.addEventListener('click', function() {
        const number = item.dataset.id;
    
        document.querySelectorAll('.accordeon__title').forEach(title => {
            title.classList.remove('accordeon__title--active');
        });
        document.querySelectorAll('.accordeon__text').forEach(text => {
            text.classList.remove('accordeon__text--active')
        });

        document.querySelector('.accordeon__title[data-id="'+ number +'"]').classList.add('accordeon__title--active');
        document.querySelector('.accordeon__text[data-id="'+ number +'"]').classList.add('accordeon__text--active');

        console.log('.accordeon__title[data-id="'+ number +'"]');
    })
});

window.addEventListener('scroll', function() {
    if(window.pageYOffset !== 0) {
        document.querySelector('.header').classList.add('header--scrolled');
    } else {
        document.querySelector('.header').classList.remove('header--scrolled');
    }
});

document.querySelector('.screen1__img-wrapper').addEventListener('mousemove', function(e) {
    const screenCenterX = document.querySelector('.screen1__img-wrapper').offsetWidth / 2;
    const screenCenterY = document.querySelector('.screen1__img-wrapper').offsetHeight / 2;

    const diffX = screenCenterX - e.pageX;
    const diffY = screenCenterY - e.pageY;

    const Layer1Coeff = 30;
    const Layer2Coeff = 15;
    const Layer3Coeff = 10;
    const Layer4Coeff = 8;
    const Layer5Coeff = 6;
    
    document.querySelectorAll('.parallax--1').forEach(item => {
        item.style.transform = 'translateX('+diffX/Layer1Coeff+'px) translateY('+diffY/Layer1Coeff+'px)';
    })
    document.querySelector('.parallax--2').style.transform = 'translateX('+diffX/Layer2Coeff+'px) translateY('+diffY/Layer2Coeff+'px)';
    document.querySelector('.parallax--3').style.transform = 'translateX('+diffX/Layer3Coeff+'px) translateY('+diffY/Layer3Coeff+'px)';
    document.querySelector('.parallax--4').style.transform = 'translateX('+diffX/Layer4Coeff+'px) translateY('+diffY/Layer4Coeff+'px)';
    document.querySelector('.parallax--5').style.transform = 'translateX('+diffX/Layer5Coeff+'px) translateY('+diffY/Layer5Coeff+'px)';

});

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(ev) {
        ev.preventDefault();

        const destinationName = ev.target.getAttribute('href');
        const destinationY = document.querySelector(destinationName).getBoundingClientRect().top + pageYOffset;
        console.log(destinationName);
        console.log(destinationY);
        
        window.scrollTo({
            top: destinationY,
            left: 0,
            behavior: 'smooth'
        });
    })
});
