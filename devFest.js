document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let gallery_images = document.querySelectorAll('.slides img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

var counter = 0;

next.addEventListener('click', slideNext);
function slideNext(){
    gallery_images[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= gallery_images.length - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    gallery_images[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

prev.addEventListener('click', slidePrev);
function slidePrev(){
    gallery_images[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0){
        counter = gallery_images.length - 1;
    }
    else{
        counter--;
    }
    gallery_images[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

function autoSlides(){
    theInterval = setInterval(timer, 4000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSlides();

const container = document.querySelector('.slides-container');
container.addEventListener('mouseover', function(){
    clearInterval(theInterval);
})

container.addEventListener('mouseout', autoSlides);

function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter){
        gallery_images[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        gallery_images[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter){
        return;
    }
    else{
        gallery_images[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        gallery_images[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}

document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('flip');
    });
});
