function loadNavbar() {
  fetch("/partials/navbar.html")
    .then((r) => r.text())
    .then((html) => {
      document.getElementById("navbar").innerHTML = html;
    });
}
// Call it after defining
loadNavbar();

function createHero({ containerId, imgSrc, imgAlt, title, fontClass }) {
  const section = document.createElement("section");
  section.className = "section-hero";

  const img = document.createElement("img");
  img.className = "section-hero-image";
  img.src = imgSrc;
  img.alt = imgAlt;

  const h2 = document.createElement("h2");
  //h2.className = "christmas_title";//
  //h2.className = font;

  h2.className = `peggie_title ${fontClass || ""}`.trim();
  h2.textContent = title;
  section.appendChild(img);
  section.appendChild(h2);

  document.getElementById(containerId).appendChild(section);
}

/*function loadHero() {
  fetch("/hero.html")
    .then((r) => r.text())
    .then((html) => {
      document.getElementById("hero").innerHTML = html;
    });
}
*/
