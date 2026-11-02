<script>
document.addEventListener("DOMContentLoaded", function () {

    const hero = document.querySelector(".hero-parallax");

    if (!hero) return;

    // Desativa o efeito em dispositivos que preferem movimento reduzido
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    let ticking = false;

    function updateParallax() {

        const rect = hero.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.bottom >= 0 && rect.top <= windowHeight) {

            const scrollProgress = (windowHeight - rect.top) /
                                   (windowHeight + rect.height);

            const movement = (scrollProgress - 0.5) * 60;

            hero.style.backgroundPosition =
                `center calc(50% + ${movement}px)`;
        }

        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });

    updateParallax();

});
</script>