$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-items')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const toggleButtons = document.getElementsByClassName('toggle-button')[0]
const navbarLink = document.getElementsByClassName('navbar-items')[0]

toggleButtons.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
})