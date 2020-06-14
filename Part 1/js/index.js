const nav = document.querySelector("#nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    nav.classList.add("active");
    // nav.className = 'nav-main active'
  } else if (window.scrollY < 50) {
    nav.classList.remove("active");
    // nav.className = 'nav-main'
  }
});