
var element = document.getElementById('mobile--navigation');
function ToggleMobileNavigation(){
    if (element.classList.contains('mobile--navigation--open')){
        element.classList.remove('mobile--navigation--open');
    }

    else{
        element.classList.add('mobile--navigation--open');
    }
}


let slideIndex = 0;

showSlide();

function showSlide(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex -1].style.display = "block";

    setTimeout(showSlide, 2000); //change image every 2 seconds
}