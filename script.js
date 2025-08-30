const btnTheme = document.getElementById("theme");
const body = document.body;

btnTheme.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // salva preferência no navegador
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// quando a página carregar, aplica o último tema salvo
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  }
};
