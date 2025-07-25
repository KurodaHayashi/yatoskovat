// Переключатель темы
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Сохраняем выбор пользователя
    localStorage.setItem('theme', newTheme);
});

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Анимация при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Инициализация
document.querySelectorAll('.product').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Запускаем сразу при загрузке