document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("[data-aos]")) {
    document.documentElement.classList.add("has-aos");
  }
});
// Preloader js
document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".page-load-progress");
  let width = 0;
  const demoLoad = setInterval(() => {
    if (width < 90) {
      width += Math.random() * 10;
      progress.style.width = width + "%";
    }
  }, 300);
  window.addEventListener("load", () => {
    clearInterval(demoLoad);
    progress.style.width = "100%";
    setTimeout(() => {
      document.body.classList.add("page-load-loaded");
    }, 500);
  });
});

// dropdown hide animation js
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".country-select-dropdown");

  dropdowns.forEach(function (dropdownParent) {
    const dropdownMenu = dropdownParent.querySelector(".dropdown-menu");

    dropdownParent.addEventListener("show.bs.dropdown", function () {
      dropdownMenu.classList.remove("hiding");
    });
    dropdownParent.addEventListener("hide.bs.dropdown", function (e) {
      e.preventDefault();
      dropdownMenu.classList.add("hiding");
      setTimeout(() => {
        dropdownMenu.classList.remove("show", "hiding");
      }, 250);
    });
  });
});
