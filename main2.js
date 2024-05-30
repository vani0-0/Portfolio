document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("menu-button");
  var menuIcon = document.querySelector(".menu-icon");
  var closeIcon = document.querySelector(".close-icon");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  const header = document.querySelector("header");
  const lineButtons = document.querySelectorAll(".line-button");
  // Function to animate text using TypeIt
  function animateText() {
    new TypeIt("#dynamic-text", {
      waitUntilVisible: true,
    })
      .type("Prgmmer.", { delay: 300 })
      .move(-6)
      .type("o")
      .move(1)
      .type("a")
      .move(4)
      .pause(300)
      .move(-5)
      .type("r")
      .pause(1000)
      .move(-10)
      .type("F", { delay: 300 })
      .type("r", { delay: 300 })
      .type("e", { delay: 300 })
      .move(3)
      .delete(3)
      .type("e", { delay: 1000 })
      .move(5)
      .delete(5)
      .type("lanc", { delay: 200 })
      .move(2)
      .pause(1000)
      .delete(10)
      .type("Minecraft")
      .pause(500)
      .delete(9)
      .type("Poor")
      .pause(500)
      .delete(4)
      .type("Pojecr manager", { delay: 300 })
      .move(-8)
      .delete(1)
      .type("T", { delay: 300 })
      .delete(1)
      .type("t", { delay: 300 })
      .pause(500)
      .move(-5)
      .type("r")
      .move(7)
      .delete(1)
      .type("M")
      .pause(1000)
      .move(7)
      .delete(16)
      .go();
  }

  animateText();
  setInterval(animateText, 26000);

  button.addEventListener("click", function () {
    menuIcon.style.display =
      menuIcon.style.display === "none" ? "inline-block" : "none";
    closeIcon.style.display =
      closeIcon.style.display === "none" ? "inline-block" : "none";

    header.classList.toggle("menu-open");
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

  lineButtons.forEach((button) => {
    button.addEventListener("click", function () {
      lineButtons.forEach((btn) => {
        if (btn !== button) {
          btn.classList.remove("active");
        }
      });

      this.classList.toggle("active");
    });
  });
});
