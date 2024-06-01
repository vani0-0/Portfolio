function animateText() {
  var element = document.querySelector(".typed");
  var typed_strings = element.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed("#dynamic-text", {
    strings: typed_strings,
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 1000,
    loop: true,
  });
}

function animateProgressBar() {
  var progressBars = document.querySelectorAll(".progress .progress-bar");
  new Waypoint({
    element: document.querySelector(".skills-content"),
    handler: function () {
      progressBars.forEach(function (bar) {
        var width = parseInt(bar.getAttribute("aria-valuenow"));
        bar.style.width = width + "%";
      });
      this.destroy();
    },
    offset: "80%",
  });
}

function main() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("ul li a");
  const header = document.querySelector("header");
  const menuIcon = document.querySelector("#menu-icon");
  const lineButtons = document.querySelectorAll(".line-button");
  animateText();

  var progressBarData = [
    { label: "Full Stack Web Development", value: 94 },
    { label: "Mobile Application Development", value: 78 },
    { label: "Systems Programming", value: 83 },
    { label: "UI/UX Design", value: 64 },
    { label: "Game Development", value: 43 },
    { label: "Data Science and Analytics", value: 67 },
    { label: "Database Management", value: 83 },
  ];

  var progressBarsContainer = document.querySelector(".skills-content");
  progressBarData.forEach(function (data, index) {
    var delay = index * 100;
    var progressBarHTML = `
      <div class="progress" data-aos="fade-right" data-aos-delay="${delay}">
        <span class="skill">${data.label} <i class="val">${data.value}%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="${data.value}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    `;
    progressBarsContainer.insertAdjacentHTML("beforeend", progressBarHTML);
  });

  animateProgressBar();

  menuIcon.addEventListener("click", function () {
    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-close");
    } else {
      menuIcon.classList.remove("fa-close");
      menuIcon.classList.add("fa-bars");
    }
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
}
document.addEventListener("DOMContentLoaded", main());
