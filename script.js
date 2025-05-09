
const menuItems = document.querySelectorAll('.menu a');


menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = e.target.id;

        switch(pageId) {
            case 'galerija':
                window.location.href = 'galerija.html';
                break;
            case 'home':
                window.location.href = 'index.html';
                break;
            case 'veikals':
            case 'atbalsts':
            case 'izpardosana':
            case 'login':
                alert('Šī lapa vēl nav pieejama!');
                break;
        }
    });
});


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


setInterval(nextSlide, 3000);
