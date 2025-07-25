// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }, 1000);
    });

    // Simple scroll animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.product-card');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});