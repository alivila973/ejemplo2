// --- Aparición de secciones ---
document.addEventListener("DOMContentLoaded", () => {
    const secciones = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = 1;
                entrada.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    secciones.forEach(seccion => {
        seccion.style.opacity = 0;
        seccion.style.transform = "translateY(60px)";
        seccion.style.transition = "all 0.8s ease";
        observer.observe(seccion);
    });
});

// --- Videos interactivos ---
document.querySelectorAll("video").forEach(video => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => video.pause());
});

// --- Botón subir arriba ---
const btnTop = document.createElement('button');
btnTop.textContent = "🔝";
btnTop.style.position = 'fixed';
btnTop.style.bottom = '20px';
btnTop.style.right = '20px';
btnTop.style.padding = '10px 15px';
btnTop.style.fontSize = '20px';
btnTop.style.borderRadius = '50%';
btnTop.style.background = '#1abc9c';
btnTop.style.color = 'white';
btnTop.style.border = 'none';
btnTop.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
btnTop.style.cursor = 'pointer';
btnTop.style.display = 'none';
btnTop.title = "Subir arriba";

document.body.appendChild(btnTop);

btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';

    // --- Barra de progreso ---
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const porcentaje = (scrollTop / scrollHeight) * 100;
    document.getElementById("barra-progreso").style.width = porcentaje + "%";
});

// --- Modo oscuro / claro ---
const modoBtn = document.getElementById("modo-btn");

modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Cambia el ícono del botón
    if (document.body.classList.contains("dark-mode")) {
        modoBtn.textContent = "☀️";
    } else {
        modoBtn.textContent = "🌙";
    }
});


// --- Ventana emergente de bienvenida ---
window.addEventListener("load", () => {
    setTimeout(() => {
        alert("¡Bienvenido al sitio sobre el Ambiente de un Estudio Ideal!");
    }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-registro");
  const mensaje = document.getElementById("mensaje-registro");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      mensaje.classList.remove("oculto");
      form.reset(); // Opcional: limpia los campos
    });
  }
});

