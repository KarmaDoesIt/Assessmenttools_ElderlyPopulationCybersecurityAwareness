const translations = {
  en: {
    siteLogo: "Site Name/Logo",
    navHome: "Home",
    navModules: "Modules",
    navQuiz: "Quiz",
    mainHeading: "Learn Secure Protect",
    mainDescription: "Welcome to our cybersecurity awareness tool for seniors.",
    btnModules: "View Modules",
    btnQuiz: "Take the Quiz",
    footerText: "© 2025 Cybersecurity Awareness. All rights reserved."
  },
  es: {
    siteLogo: "Nombre del sitio/Logo",
    navHome: "Inicio",
    navModules: "Módulos",
    navQuiz: "Cuestionario",
    mainHeading: "Aprende, Protege, Asegura",
    mainDescription: "Bienvenido a nuestra herramienta de concienciación sobre ciberseguridad para personas mayores.",
    btnModules: "Ver Módulos",
    btnQuiz: "Tomar el Cuestionario",
    footerText: "© 2025 Concienciación sobre Ciberseguridad. Todos los derechos reservados."
  }
};

const languageSwitcher = document.getElementById("languageSwitcher");

languageSwitcher.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  updateLanguage(selectedLang);
});

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Default language on page load
updateLanguage("en");
