const backdrop = document.querySelector(".backdrop");
const aside = document.querySelector("aside");
const closeBtn = document.querySelector(".close");
const menuBtn = document.getElementById("menu-btn");

//Side Navigation

const openMenu = () => {
  backdrop.className = "backdrop active";
  aside.className = "active";
};

const closeMenu = () => {
  backdrop.classList.remove("active");
  aside.className = "";
};

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openMenu();
});

closeBtn.addEventListener("click", (e) => {
  closeMenu();
});

backdrop.addEventListener("click", (e) => {
  closeMenu();
});

// Scrolling
document.scrollPosition = 0;
const direction = window.pageYOffset - scrollPosition;
document.lastCentered = 0;

document.addEventListener("scroll", () => {
  const direction = window.pageYOffset - scrollPosition > 0 ? "down" : "up";
  const sections = [...document.querySelectorAll("section")];

  const destIndex =
    direction === "up" ? document.lastCentered - 1 : document.lastCentered + 1;
  if (destIndex >= 0 && destIndex < sections.length) {
    window.scroll(0, sections[destIndex].offsetTop);
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset === section.offsetTop) {
      document.lastCentered = index;
    }
  });
});
