var slideIndex = 0;
                showSlides();
                
                function showSlides() {
                  var i;
                  var slides = document.getElementsByClassName("mySlides");
                  var dots = document.getElementsByClassName("dot");
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
   const slides=document.querySelector(".slider").children;
   const indicatorImages=document.querySelector(".slider-indicator").children;

    for(let i=0; i<indicatorImages.length; i++){
    	indicatorImages[i].addEventListener("click",function(){
         
           for(let j=0; j<indicatorImages.length; j++){
             indicatorImages[j].classList.remove("active");
           }
            this.classList.add("active");
            const id=this.getAttribute("data-id");
           for(let j=0; j<slides.length; j++){
           	slides[j].classList.remove("active");
           }

            slides[id].classList.add("active");

    	})
    }

    
