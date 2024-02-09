const carusel = document.querySelector(".carousel");
const items = document.querySelectorAll(".sldr");
const dots = document.querySelectorAll('.carusel-button');
const nextbtn = document.querySelector('.next');
const prevbtn = document.querySelector('.prev');
const imgs = document.querySelectorAll('.imgs');
const productDots = document.querySelectorAll('.products-button');
const imgs2 = document.querySelectorAll('.imgs2');
const productDots2 = document.querySelectorAll('.products-button2');
const imgs3 = document.querySelectorAll('.imgs3');
const productDots3 = document.querySelectorAll('.products-button3');
const newsImgs = document.querySelectorAll('.slider-img');
const newsButtons = document.querySelectorAll('.news-btn');

dots.forEach((dot,idx)=>{
    dot.addEventListener('click',()=>{
        changeSlides(idx);
    })
})

function changeSlides(idx){
    items.forEach(x=>x.style.display = "none");
    items[idx].style.display = "block";
    dots.forEach(x=>x.classList.remove('carusel-button--selected'));
    dots[idx].classList.toggle('carusel-button--selected');
}


document.addEventListener('DOMContentLoaded', function() {
    var currentSlider = 1;

    function showSlider(sliderNumber) {
     items.forEach(function(slider) {
        slider.classList.remove('active');
      });

      document.querySelector('.sldr.slider-' + sliderNumber).classList.add('active');
    }

    function updateSlider(direction) {
      currentSlider = (currentSlider + direction + 2) % 3 + 1;
      showSlider(currentSlider);
    }

    nextbtn.addEventListener('click', function() {
      updateSlider(1);
    });

    prevbtn.addEventListener('click', function() {
      updateSlider(-1);
    });
    showSlider(currentSlider);
  });


  productDots.forEach((dot,idx)=>{
    dot.addEventListener('click',()=>{
        changeImg(idx);
    })
})

function changeImg(idx){
  imgs.forEach(x=>x.style.display = "none");
  imgs[idx].style.display = "block";
  productDots.forEach(x=>x.classList.remove(' products-button--selected'));
  productDots[idx].classList.toggle(' products-button--selected');
}


  productDots2.forEach((dot,idx)=>{
    dot.addEventListener('click',()=>{
        changeImg2(idx);
    })
})

function changeImg2(idx){
  imgs2.forEach(x=>x.style.display = "none");
  imgs2[idx].style.display = "block";
  productDots2.forEach(x=>x.classList.remove(' products-button--selected2'));
  productDots2[idx].classList.toggle(' products-button--selected2');
}




  productDots3.forEach((dot,idx)=>{
    dot.addEventListener('click',()=>{
        changeImg3(idx);
    })
})

function changeImg3(idx){
  imgs3.forEach(x=>x.style.display = "none");
  imgs3[idx].style.display = "block";
  productDots3.forEach(x=>x.classList.remove('products-button--selected3'));
  productDots3[idx].classList.toggle('products-button--selected3');
}


  newsButtons.forEach((dot,idx)=>{
    dot.addEventListener('click',()=>{
        changeImg4(idx);
    })
})

function changeImg4(idx){
  newsImgs.forEach(x=>x.style.display = "none");
  newsImgs[idx].style.display = "block";
  newsButtons.forEach(x=>x.classList.remove('products-button--selected3'));
  newsButtons[idx].classList.toggle('products-button--selected3');
}


