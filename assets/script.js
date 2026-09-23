document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // Click/tap-to-highlight for feature cards, product rows, industries, badges
  var highlightable = document.querySelectorAll(
    ".cell, .product-row, .industry-item, .trust-strip span, .team-card, .integration-row"
  );
  highlightable.forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; // let links behave normally
      var wasActive = el.classList.contains("is-active");
      highlightable.forEach(function (other) {
        if (other !== el) other.classList.remove("is-active");
      });
      el.classList.toggle("is-active", !wasActive);
    });
  });

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var original = btn.textContent;
      btn.textContent = "Message sent";
      form.reset();
      setTimeout(function () {
        btn.textContent = original;
      }, 2500);
    });
  }
});
