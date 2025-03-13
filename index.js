      
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  // Verificar si hay un tema guardado en localStorage
  if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      icon.classList.replace("fa-moon", "fa-sun"); // Cambia el icono a sol
  }

  // Evento para cambiar el tema
  themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
          icon.classList.replace("fa-moon", "fa-sun"); // Cambia el icono a sol
      } else {
          localStorage.setItem("theme", "light");
          icon.classList.replace("fa-sun", "fa-moon"); // Cambia el icono a luna
      }
  });
});

document.addEventListener("click", function (event) {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (
      navbarCollapse.classList.contains("show") &&
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)
  ) {
      new bootstrap.Collapse(navbarCollapse).hide();
  }

  if (event.target.classList.contains("nav-link") && window.innerWidth < 992) {
      new bootstrap.Collapse(navbarCollapse).hide();
  }
});

