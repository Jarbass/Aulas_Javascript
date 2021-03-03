//Função Lista de Animais - Texto de acordo com a imagem.
function initTabNav() {
    const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
    const tabContent = document.querySelectorAll("[data-tab='content'] section");

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add("ativo");

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove("ativo");
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add("ativo", direcao);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

//Função FAQ - "Escondendo" o parágrafo.
function initAccordion() {
    const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
    const activeClass = "ativo";

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);


        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}

initAccordion();


//Suavizar Scroll
function initScrollSuave() {

    const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");

    function scrollToSection(event) {

        event.preventDefault();

        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        /* Forma Alternativa
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: "smooth"
        });
        */
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}

initScrollSuave();


//Suavizar entrada de conteúdo de acordo com o scroll
function initAnimationScroll() {

    const sections = document.querySelectorAll("[data-anime='scroll']");

    if (sections.length) {

        const windowMetade = window.innerHeight * 0.4; //Pegando 40% da tela

        function animaScroll() {

            sections.forEach((section) => {

                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                const isSectionVisible = (sectionTop - windowMetade) < 0; //true or false

                if (isSectionVisible) {
                    section.classList.add("ativo");
                }
            });
        }

        animaScroll();

        window.addEventListener("scroll", animaScroll);
    }
}

initAnimationScroll();
