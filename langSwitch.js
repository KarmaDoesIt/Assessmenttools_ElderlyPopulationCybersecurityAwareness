document.getElementById("languageSwitcher").addEventListener("change", function () {
  window.location.href = this.value;
});

const currentPage = location.pathname.split("/").pop();
const options = document.querySelectorAll("#languageSwitcher option");
options.forEach(option => {
  if (option.value === currentPage) {
    option.selected = true;
  }
});
