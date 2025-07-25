// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Скрываем прелоадер
    setTimeout(() => {
        gsap.to('.loader', {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                document.querySelector('.loader').style.display = 'none';
            }
        });
    }, 1500);

    // Кастомный курсор
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // Эффект при наведении на интерактивные элементы
    const interactiveElements = document.querySelectorAll('a, button, .product-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });

    // Анимация появления элементов при скролле
    gsap.utils.toArray('[data-aos]').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Анимация карточек товаров
    gsap.utils.toArray('.product-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });

    // Переключатель темы
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        
        // Анимация переключения
        gsap.fromTo('body', 
            { opacity: 0.8 },
            { opacity: 1, duration: 0.5 }
        );
    });

    // Плавный скролл для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            gsap.to(window, {
                scrollTo: this.getAttribute('href'),
                duration: 1,
                ease: 'power2.inOut'
            });
        });
    });
});

// Инициализация ScrollTrigger
gsap.registerPlugin(ScrollTrigger);