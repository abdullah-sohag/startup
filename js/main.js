const navContent = document.querySelector('#nav-content');
const topHead = document.querySelector('#top-head');
const searchBox = document.querySelector('.pop-search');
const searchCross = document.querySelector('#close-search');
const searchBtn = document.querySelector('#search-btn');

// aos ----------------------

AOS.init();

// -/aos ----------------------


// splide --------------------
let splide = new Splide( '#splid1', {
    type  : 'fade',
    rewind: true,
    pagination : false,
    autoplay: true,
  } );
  
  splide.mount()
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
        topHead.classList.add('d-lg-none')
    } else {
       navContent.classList.remove('nav-scroll-effect') 
       topHead.classList.remove('d-lg-none') 
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


