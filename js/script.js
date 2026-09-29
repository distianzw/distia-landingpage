/* =================================
   SLIDER BERANDA
================================= */

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

let heroIndex = 0;

function nextHeroSlide() {

    if (heroSlides.length === 0) return;

    heroSlides[heroIndex].classList.remove("active");

    if (heroDots.length > heroIndex) {
        heroDots[heroIndex].classList.remove("active");
    }

    heroIndex++;

    if (heroIndex >= heroSlides.length) {
        heroIndex = 0;
    }

    heroSlides[heroIndex].classList.add("active");

    if (heroDots.length > heroIndex) {
        heroDots[heroIndex].classList.add("active");
    }
}


/* BERANDA BERGERAK OTOMATIS
   setiap 4 detik
*/

if (heroSlides.length > 1) {
    setInterval(nextHeroSlide, 4000);
}



/* =================================
   SLIDER PRESTASI
================================= */

let posisiPrestasi = 0;

const track = document.querySelector(".prestasi-track");
const dots = document.querySelectorAll(".dot");


function geserPrestasi(arah) {

    if (!track) return;

    posisiPrestasi += arah;

    if (posisiPrestasi < 0) {
        posisiPrestasi = 2;
    }

    if (posisiPrestasi > 2) {
        posisiPrestasi = 0;
    }

    updatePrestasi();
}


function slideKe(index) {

    posisiPrestasi = index;

    updatePrestasi();
}


function updatePrestasi() {

    if (!track) return;

    track.style.transform =
        `translateX(-${posisiPrestasi * 100}%)`;

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === posisiPrestasi
        );

    });
}
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}