// Smooth fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Listen for scroll
    window.addEventListener('scroll', revealOnScroll);
});

// Optional: Smooth scroll to top on page load
window.onload = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
