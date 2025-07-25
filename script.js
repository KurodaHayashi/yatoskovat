// Инициализация анимаций
document.addEventListener('DOMContentLoaded', () => {
    // Регистрируем плагины GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Анимация появления элементов
    gsap.utils.toArray('[data-aos]').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Курсор-стрелка (как на Mac)
    document.body.style.cursor = 'default';

    // Эффекты при наведении на кнопки
    const buttons = document.querySelectorAll('button, a[href]');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });
        btn.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default';
        });
    });
});