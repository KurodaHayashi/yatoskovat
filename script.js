// Плавное появление элементов
gsap.from(".hero-content", { 
    opacity: 0, 
    y: 50, 
    duration: 1.5, 
    delay: 0.5 
});

// Параллакс для товаров
gsap.utils.toArray(".product-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out"
    });
});

// 3D-эффект при наведении (ещё плавнее)
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.to(card, {
            rotateY: (x - rect.width / 2) / 20,
            rotateX: -(y - rect.height / 2) / 20,
            duration: 0.5
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5
        });
    });
});