
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000);
});


const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const href = e.target.getAttribute('href');
        if (!href || href === '') {
            e.preventDefault();
            alert('Šī lapa vēl nav pieejama!');
        }
    });
 });