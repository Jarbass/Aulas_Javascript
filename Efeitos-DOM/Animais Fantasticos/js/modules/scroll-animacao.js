export default function initAnimationScroll() {

    const sections = document.querySelectorAll("[data-anime='scroll']");

    if (sections.length) {

        const windowMetade = window.innerHeight * 0.4; //Pegando 40% da tela

        function animaScroll() {

            sections.forEach((section) => {

                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                const isSectionVisible = (sectionTop - windowMetade) < 0; //true or false

                if (isSectionVisible) {
                    section.classList.add("ativo");
                } else if (section.classList.contains("ativo")) {
                    section.classList.remove("ativo");
                }
            });
        }

        animaScroll();

        window.addEventListener("scroll", animaScroll);
    }
}

