function animateText(id, typeSpeed, backSpeed, backDelay, loop) {
  const element = document.getElementById(id);
  var typed_strings = element.getAttribute("data-typed-items").split(",");
  new Typed(`#${id}`, {
    strings: typed_strings,
    typeSpeed,
    backSpeed,
    backDelay,
    loop,
  });
}

function main() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("ul li a");
  const header = document.querySelector("header");
  const openMenu = document.querySelectorAll(".menu-button");
  animateText("dynamic-text", 50, 20, 1000, true);

  openMenu.forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".mobile-nav").classList.toggle("mobile-nav-open");
    });
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelector(".mobile-nav").classList.toggle("mobile-nav-open");
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", main());
