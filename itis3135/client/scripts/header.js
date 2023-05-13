document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("header");
  header.innerHTML = `
  <h1>The Beatiful Sport: <strong>Soccer</strong></h1>

      <nav>
        <a href="index.html">Home</a> |
        <a href="leagues.html">Top Leagues</a> |
        <a href="teams.html">Top Teams</a> |
        <a href="rules.html">In-Depth Rules</a> |
        <a href="about.html">About Us</a>
      </nav>

    `;
  document.body.insertBefore(header, document.body.firstChild);
});
