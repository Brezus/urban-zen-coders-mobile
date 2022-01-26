const burgerMenu = document.getElementById("menu-icon");
const hiddenNav = document.querySelector(".hidden-nav");
const xButton = document.getElementById("xButton");
const regDonBtns = document.querySelectorAll(".btn");
const accordionBtns = document.querySelectorAll(".accordion");
const accordionCont = document.querySelector(".hidden-nav-accordion");
const hiddenNavList = document.getElementById("accordion-links");

hiddenNavList.addEventListener("click", (e) => {
  let clickedLink = e.target;
  clickedLink.addEventListener("click", closeNav());
});

accordionCont.addEventListener("click", (e) => {
  let target = e.target.closest(".accordion");
  if (!target) return;
  if (!accordionCont.contains(target)) return;
  target.classList.toggle("active");
});

for (btn of regDonBtns) {
  btn.addEventListener("click", closeNav);
}

burgerMenu.addEventListener("click", showNav);
xButton.addEventListener("click", closeNav);

function showNav() {
  hiddenNav.style.display = "grid";
}
function closeNav() {
  hiddenNav.style.display = "none";
}
function closeContent() {
  for (btn of accordionBtns) {
    btn.classList.remove("active");
  }
}
