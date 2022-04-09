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
