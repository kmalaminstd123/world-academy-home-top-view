// toggle search section

document.addEventListener('DOMContentLoaded', ()=> {

    const toggleSearchBtn = document.querySelector('.searchToggleBtn')
    const searchSectionElm = document.querySelector('#search-section')
    const searchCloseButton = document.querySelector('.searchCloseBtn')

    toggleSearchBtn.addEventListener('click', ()=> {
        searchSectionElm.classList.add('searchActive')
    })

    searchCloseButton.addEventListener('click', ()=> {
        searchSectionElm.classList.remove('searchActive')
    })
})

// fixed navbar after scroll

const navbar = document.querySelector('.wa-navbar')
window.addEventListener('scroll', ()=> {
    console.log(window.scrollY);

    if(window.scrollY > 499){
        navbar.classList.add('navActive')
    }else{
        navbar.classList.remove('navActive')
    }
    
})


// banner slider swiper settings
const bannerSliderSwiper = new Swiper('.bannerSliderSwiper', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: '.bannerSlidePagination',
        clickable: true,
    },
})