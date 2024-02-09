const item = document.querySelectorAll(".slide");
const dots = document.querySelectorAll('.carusel-dot');

const useritems = document.querySelectorAll(".sldr1");
const userdot = document.querySelectorAll('.user-dot');

const imgs = document.querySelectorAll(".sldr3");
const btns = document.querySelectorAll('.option-dot');


dots.forEach((dot,idx)=>{
    dot.addEventListener('click',()=>{
        changeSlides1(idx);
    })
})

function changeSlides1(idx){
    item.forEach(x=>x.style.display = "none");
    item[idx].style.display = "block";
    dots.forEach(x=>x.classList.remove('carusel-button--selected'));
    dots[idx].classList.toggle('carusel-button--selected');
}






//**************************** */

userdot.forEach((dot,idx)=>{
    dot.addEventListener('click',()=>{
        changeSlides2(idx);
    })
})

function changeSlides2(idx){
    useritems.forEach(x=>x.style.display = "none");
    useritems[idx].style.display = "block";
    userdot.forEach(x=>x.classList.remove('user-button--selected'));
    userdot[idx].classList.toggle('user-button--selected');
}






//********************* */


btns.forEach((dot,idx)=>{
    dot.addEventListener('click',()=>{
        changeSlides3(idx);
    })
})

function changeSlides3(idx){
    imgs.forEach(x=>x.style.display = "none");
    imgs[idx].style.display = "block";
    btns.forEach(x=>x.classList.remove('user-button--selected'));
    btns[idx].classList.toggle('user-button--selected');
}