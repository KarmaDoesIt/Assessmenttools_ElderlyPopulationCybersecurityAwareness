document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const content = button.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe");

  const moduleMap = {
    "virus-intro": "Articles/Virus/virus_intro.html",
    "adware-intro": "Articles/Adware/adware_intro.html",
    "trojan-intro": "Articles/Trojan/trojan_intro.html",
    "phishing-intro": "Articles/Phishing/phishing_intro.html",
    "mobile-intro": "Articles/Mobile/mobile_intro.html",
  };

  const fragment = window.location.hash.slice(1); // Get text after #
  if (fragment && moduleMap[fragment]) {
    iframe.src = moduleMap[fragment];
  }
});
