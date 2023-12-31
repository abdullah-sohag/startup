const header = document.querySelector('header');
const navContent = document.querySelector('#nav-content');
const topHead = document.querySelector('#top-head');
const searchBox = document.querySelector('.pop-search');
const searchCross = document.querySelector('#close-search');
const searchBtn = document.querySelector('#search-btn');
const counterItems = document.querySelectorAll('.number-counter');
const box = document.querySelector('.counter-box');

// aos ----------------------

AOS.init();

// -/aos ----------------------


// splide --------------------
let splide = new Splide( '#splid1', {
    type  : 'fade',
    // rewind: true,
    pagination : false,
    autoplay: true,
  } );

  splide.mount()
let splide2 = new Splide( '#carousel2', {
    type  : 'loop',
    perPage: 3,
    perMove: 1,
    focus  : 'center',
    breakpoints: {
        768: {
          perPage: 1,
        },
      },
  } );
  
  splide2.mount()



let splide3 = new Splide( '#brand-carousel', {
    type  : 'loop',
    perMove: 1,
    pagination : false,
    autoplay: true,
    arrows: false,
    perPage: 8,
    gap:'10px',
    breakpoints: {
        576: {
          perPage: 4,
        },
        768: {
            perPage: 6,
          },
      },
    
    // autoplay: true,
  } );
  
  splide3.mount()
// new Splide( '#splid1' ).mount();

// -/splide --------------------

// loader --------------
window.addEventListener('load',()=>{
    
    const loader = document.querySelector('.loader')
    setTimeout(hideLoder,1000)
    
    function hideLoder (){
        loader.classList.add('loader--hiden')
        loader.classList.add('lodar--none')
}


loader.addEventListener('transitionend',()=>{

     loader.remove()
})

})
// -/loader ------------

// scroll --------------------

window.onscroll= ()=>{
    if (window.scrollY>45) {
        navContent.classList.add('nav-scroll-effect')
        header.classList.add('top-incrase')
    } else {
       navContent.classList.remove('nav-scroll-effect') 
        header.classList.remove('top-incrase') 
    }
}

// -/scroll ------------------


// search ---------------------
searchCross.onclick = ()=>{
    searchBox.classList.add('d-none')
}
searchBtn.onclick = ()=>{
    searchBox.classList.remove('d-none')
}
// -/search ---------------------


// counter-------------------

function countitm() {
    let intervel = 5000;

for (let i of counterItems) {
    let startCount = 0
    let endCount = parseInt(i.getAttribute('data-count'))
    let duration = Math.floor(endCount/intervel)
    let counter = setInterval(function(){
        startCount+=101;
        i.innerHTML = startCount
        if (startCount >= endCount) {
            clearInterval(counter)
            i.innerHTML = endCount
        }
    },duration)
    
}
}

const callbackFunction = function(entries) {
    if(!entries[0].isIntersecting){
        return;
    }else{
        countitm()
        observer.unobserve(box);
    }
}

const observer = new IntersectionObserver(callbackFunction,{
    threshold:1
    
});

observer.observe(box);


// -/counter-------------------

