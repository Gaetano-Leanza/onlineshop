document.addEventListener("DOMContentLoaded", function () {
  const bilderInhalte = {
    hijab: `
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Hijab 1" /></div>
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Hijab 2" /></div>
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Hijab 3" /></div>
    `,
    jilbab: `
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Jilbab 1" /></div>
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Jilbab 2" /></div>
    `,
    abaya: `
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Abaya 1" /></div>
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Abaya 2" /></div>
    `,
    bonne: `
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Bonne 1" /></div>
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Bonne 2" /></div>
    `,
    niqab: `
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Niqab 1" /></div>
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Niqab 2" /></div>
    `,
    "sunnah-hosen": `
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Sunnah-Hose 1" /></div>
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Sunnah-Hose 2" /></div>
    `,
    jalabiyya: `
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Jalabiyya 1" /></div>
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Jalabiyya 2" /></div>
    `,
    accessoires: `
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Accessoires 1" /></div>
      <div class="card"><img src="assets/img/placeholder.jpg" alt="Accessoires 2" /></div>
    `,
     kinder: `
      <div class="card"><img src="assets/img/placeholder-kinder.jpg"" alt="Kinder 1" /></div>
      <div class="card"><img src="assets/img/placeholder-kinder.jpg" alt="Kinder 2" /></div>
    `,
  };

  const h1 = document.getElementById("hauptTitel");
  const bilderContainer = document.getElementById("bilder");
  const startInhalt = bilderContainer.innerHTML;

  // Modal-EventListener binden
  function initModal() {
    const cards = document.querySelectorAll(".card img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        modalImg.src = card.src;
        modal.style.display = "flex";
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target !== modalImg) {
        modal.style.display = "none";
      }
    });
  }

  initModal();

  // Burger-Menü Funktionalität
  const burgerMenu = document.getElementById("burgerMenu");
  const burgerIcon = document.getElementById("burgerIcon");

  burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("menu-open");
  });

  // Dynamisches Laden der Bilder und Ein/Ausblenden des h1
  document.querySelectorAll("#menuLinks a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = link.getAttribute("data-category");

      if (category && bilderInhalte[category]) {
        bilderContainer.innerHTML = bilderInhalte[category];
        h1.classList.add("hidden"); // h1 ausblenden
      } else if (link.id === "homeLink") {
        bilderContainer.innerHTML = startInhalt;
        h1.classList.remove("hidden"); // h1 einblenden
      }

      initModal();
      burgerMenu.classList.remove("menu-open");
    });
  });

  // Eventlistener fürs Kontaktformular (bleibt unverändert)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      document.getElementById("spinner").style.display = "inline-block";

      setTimeout(function () {
        window.location.href = "send_mail.html";
      }, 1000);
    });
  }
});
