

// navigation bar toggle for mobile view
function toggleBar () {
    const navList = document.querySelector('.nav-links');
    if (navList.style.display === 'flex') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
    }
}
console.log(toggleBar);

// Sticky header functionality
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const homeSection = document.querySelector('#home');
    const homeHeight = homeSection.offsetHeight;
    
    if (window.scrollY > homeHeight - 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
