// Scroll animation
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      card.classList.add('show');
    }
  });
});
