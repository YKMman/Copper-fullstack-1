// ! Index page
// ? burger
const burger = document.querySelectorAll('.burger')
const header = document.querySelectorAll('.header')

if(burger) {
    burger.forEach((item) => {
        item.addEventListener('click', () => {
            header.forEach((el) => {
                el.classList.toggle('header-open')
            })
        })
    })
}


// ? animation hero 


const saxofon = document.querySelector('.hero__item-saxofon')
const saxofonBox = document.querySelector('.hero__item-box')
const heroBlock = document.querySelector('.hero__block')

if(saxofon || saxofonBox || heroBlock) {
    function heroAnimate() {
        window.setTimeout(function() {
            saxofonBox.style.transform = 'translate(0, 3px)'
            saxofonBox.style.opacity = 1
            saxofonBox.style.visibility = 'visible'
        }, 1000)
    
        window.setTimeout(function() {
            heroBlock.style.transform = 'translate(0, 0px)'
        }, 1000)
        
        window.setTimeout(function() {
            saxofon.style.transform = 'translate(0, 50px)'
            saxofon.style.opacity = 1
            saxofon.style.visibility = 'visible'
        }, 1500) 
    }
    
    heroAnimate()
    
}






// ! About us page
// ? hero
const aboutHeroRight = document.querySelector('.about__hero-right')
const aboutHeroLeft = document.querySelector('.about__hero-left')

if(aboutHeroLeft || aboutHeroRight) {
    const animationAboutHero = () => {

        window.setTimeout(function() {
            aboutHeroLeft.style.opacity = 1
            aboutHeroLeft.style.visibility = 'visible'
        }, 800)
        window.setTimeout(function() {
            aboutHeroRight.style.transform = 'translate(0, 0)'
        }, 1000)
    }

    animationAboutHero()
}




// ? about

