document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("header");
  header.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="stuff/MYPAGNRGRWSR.html">Crappy Page</a>
    <a href="Accessibility/Lanka-Activity_Accessibility.html">Accessibility</a>
    <a href="hobby/index.html">Hobby</a>
    <a href="Lanka-Activity11/Lanka-Activity11.html">Accordion Widget</a>
    <a href="Lanka-Activity12/Lanka-Activity12.html">bxSlider Plugin</a>
    <a href="Lanka-Activity13/Lanka-Activity13.html">XML to JSON</a>
    <a href="Lanka-Activity14/Lanka-Activity14.html">Loud Speaker Files</a>
    <a href="Lanka-Activity15/Lanka-Activity15.html">Expanded JSON</a>
    <a href="Lanka-Activity16/Lanka-Activity16.html">Flickr Photo Gallery</a>
  </div>
  <nav name="n">
    <div class="logo">
      <span onclick="openNav()">&#9776; AL</span>
    </div>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="introduction.html">Introduction</a></li>
      <li><a href="contract.html">Contract</a></li>
      <li><a href="tables.html">Tables</a></li>
      <li><a href="form.html">Forms</a></li>
      <li><a href="website_evaluations.html">Website Evaluation</a></li>
      <div class="dropdown">
      <button class="dropbtn ignore-css">Calculator
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="calc-try.html">Calculator Try</a>
        <a href="calc-fcc.html">Calculator FCC</a>
      </div>
    </div>
      <li><a href="first-script.html">First Script</a></li>
      <li><a href="polygons.html">Polygons</a></li>
      <li><a href="arrays.html">Arrays</a></li>
     
      <div class="dropdown">
      <button class="dropbtn ignore-css">Client
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="project-design.html">Project Design</a>
        <a href="review1.html">Peer review 1</a>
        <a href="review2.html">Peer review 2</a>
        <a href="client/">Client Website</a>
      </div>
    </div>
    <li><a href="slideshow.html">Slideshow</a></li>
    </ul>
    
  </nav>
`;
  document.body.insertBefore(header, document.body.firstChild);
});

const navContainer = document.getElementsByName("n");
navContainer.innerHTML = header.innerHTML;

// Set the active link based on the current page URL
function setActiveNavLink() {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

setActiveNavLink();
