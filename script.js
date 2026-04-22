// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Enhanced scroll animation for cards with Intersection Observer
const cards = document.querySelectorAll('.card');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

cards.forEach(card => observer.observe(card));

// Dynamic header shadow on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
    header.style.background = 'rgba(10, 14, 39, 0.9)';
  } else {
    header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    header.style.background = 'rgba(10, 14, 39, 0.7)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Mouse movement parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    hero.style.transform = `perspective(1000px) rotateX(${y * 0.5}deg) rotateY(${x * 0.5}deg)`;
  });
  
  document.addEventListener('mouseleave', () => {
    hero.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
}

// Card hover effects with mouse tracking
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  });
});
