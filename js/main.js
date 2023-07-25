const navContent = document.querySelector('#nav-content');
const topHead = document.querySelector('#top-head');

new Splide( '#splid1' ).mount();


window.onscroll= ()=>{
    if (window.scrollY>45) {
        navContent.classList.add('nav-scroll-effect')
        topHead.classList.add('d-lg-none')
    } else {
       navContent.classList.remove('nav-scroll-effect') 
       topHead.classList.remove('d-lg-none') 
    }
}
