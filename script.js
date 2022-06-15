let slideIndex = 0;
let CorouselIndex = 0;
let i=1;
        showSlides();
        showCorousel();
        
        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 2000); // Change image every 2 seconds
        }
      //   let pics = document.getElementById("coro");
      //       let pages = document.getElementById("pgs");
      //   if(i==1){
      //     pics.style.backgroundImage = "url('1.jpg')";
      //     pages.innerHTML="Wildlife";
      // }
        function showCorousel() {
             let pics = document.getElementById("coro");
           let pages = document.getElementById("pgs");
            if(i==5){
              i=1;
            }
            if(i==1){
                pics.style.backgroundImage = "url('1.jpg')";
                pages.innerHTML="Wildlife";
            }
            else if(i==2){
                pics.style.backgroundImage = "url('heritage.jpg')";
                pages.innerHTML="Heritage";
              }
            else if(i==3){
                pics.style.backgroundImage = "url('spirit.jpg')";
                pages.innerHTML="Spirituality";
            }
            else if(i==4){
                pics.style.backgroundImage = "url('nature.jpg')";
                pages.innerHTML="Nature";
            }
            i++;
          }
          setInterval(function(){
              showCorousel();
           }, 3000);

  let cross=document.getElementById("cross");
  cross.onClick=()=>{
       let covid=document.getElementById("covid");
       covid.style.opacity='0';
       cross.style.opacity='0';
  }


  (function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
    