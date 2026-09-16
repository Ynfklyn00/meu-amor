
const dataInicio = new Date("2024-02-11");


/* =========================
   CONTADOR
========================= */

function atualizarContador() {

    const agora = new Date();

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();

    if (dias < 0) {
        meses--;

        const ultimoMes = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        );

        dias += ultimoMes.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    let diferenca = agora - dataInicio;

    const horas = Math.floor(
        diferenca / (1000 * 60 * 60)
    ) % 24;

    const minutos = Math.floor(
        diferenca / (1000 * 60)
    ) % 60;

    const segundos = Math.floor(
        diferenca / 1000
    ) % 60;


    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

setInterval(atualizarContador, 1000);
atualizarContador();


/* =========================
   CORAÇÕES FLUTUANDO
========================= */

function criarCoracao() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const tipos = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        tipos[Math.floor(Math.random() * tipos.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(criarCoracao, 500);


/* =========================
   CARTA
========================= */

function abrirCarta() {

    const carta = document.getElementById("carta");

    carta.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        document.querySelector(".letter")
            .classList.add("show");
    }, 700);
}


/* =========================
   MÚSICA
========================= */

const musica = document.getElementById("musica");

function toggleMusic() {

    const texto =
        document.getElementById("musicText");

    if (musica.paused) {

        musica.play();

        texto.textContent =
            "Pausar música";

    } else {

        musica.pause();

        texto.textContent =
            "Tocar música";
    }
}


/* =========================
   MOSTRAR CARTA AO ROLAR
========================= */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.25
    }
);

observer.observe(document.querySelector(".letter"));
