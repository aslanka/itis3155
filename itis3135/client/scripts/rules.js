function hideAll() {
  document.getElementById("basicrules").style.display = "none";
  document.getElementById("freekicks").style.display = "none";
  document.getElementById("subs").style.display = "none";
  document.getElementById("fouls").style.display = "none";
}

function showElement(id) {
  let element = document.getElementById(id);
  element.style.display = "block";
}

function setVisible(id) {
  hideAll();
  showElement(id);
}
const sections = document.querySelectorAll("rules-page-section");
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
