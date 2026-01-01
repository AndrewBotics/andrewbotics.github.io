const QUOTES = [
    "I've not been afraid of heights because I might fall, but because I knew I couldn't fly. Now I'm building wings.",
    "Giving up on the impossible defeats its purpose.",
    "Wait too long when you're cooked, and you'll be burnt.",
    "Rich philanthropists to the poor have stolen from the poor. That's why I don't aspire to be rich.",
    "I might be unserious, but I'm not unprepared.",
    "I do as I please and I please as I do.",
    "Life is not designed for purpose, so we simply engineer one ourselves.",
    "It's hard to find good people, but it's harder to make them stay."
];

function displayDynamicQuote() {
    const quoteElement = document.querySelector('.gray-quote');
    if (quoteElement) {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        
        const index = dayOfYear % QUOTES.length;

        quoteElement.textContent = `"${QUOTES[index]}"`;
    }
}


function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    
    if (nav && navLinks && !nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    displayDynamicQuote();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});