export default function initAnimaNumeros() {

    const observerTarget = document.querySelector(".numeros");
    const observer = new MutationObserver(handleMutation);

    observer.observe(observerTarget, { attributes: true });

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains("ativo")) {
            observer.disconnect();
            animaNumeros();
        }
    }

    function animaNumeros() {
        const numeros = document.querySelectorAll("[data-numero]");

        numeros.forEach((numero) => {
            const total = Number(numero.innerText);
            const incremento = Math.floor(total / 100);
            let start = 0;

            const timer = setInterval(() => {
                start += incremento;

                numero.innerText = start;

                if (start > total) {
                    numero.innerText = total;
                    clearInterval(timer)
                }
            }, 25 * Math.random())
        });
    }



}