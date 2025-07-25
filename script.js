// GSAP анимации
document.addEventListener('DOMContentLoaded', () => {
    // Анимация загрузки
    gsap.to(".loader", {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        onComplete: () => {
            document.querySelector(".loader").style.display = "none";
        }
    });

    // Анимация карточек
    gsap.utils.toArray(".product-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1
        });
    });
});