const navContent = document.querySelector('#nav-content');
const topHead = document.querySelector('#top-head');

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



