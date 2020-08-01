const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');   
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');  
const header = document.querySelector('.header.container');  

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

    //owl-carousel init
    $('#about .about .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })
