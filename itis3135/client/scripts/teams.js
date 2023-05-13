function hideAll() {
  document.getElementById("prem").style.display = "none";
  document.getElementById("liga").style.display = "none";
  document.getElementById("bundsliga").style.display = "none";
}

function showElement(id) {
  let element = document.getElementById(id);
  element.style.display = "block";
}

function setVisible(id) {
  hideAll();
  showElement(id);
}
const sections = document.querySelectorAll("team-page-section");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    const href = link.getAttribute("href");
    const section = document.querySelector(href);
    section.classList.add("active");
  });
});
