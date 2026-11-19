(function () {
  "use strict";
  var config = window.SITE_CONFIG || {};
  var brand = config.brandName || "Loopsoha";
  var email = config.contactEmail || "hello@loopsoha.com";
  document.querySelectorAll("[data-brand]").forEach(function (el) { el.textContent = brand; });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    if (el.tagName === "A") el.href = "mailto:" + email;
    if (!el.children.length) el.textContent = email;
  });
  document.querySelectorAll("[data-mailto]").forEach(function (el) { el.href = "mailto:" + email; });
  if (document.title.indexOf("Loopsoha") !== -1) document.title = document.title.replace("Loopsoha", brand);
  document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(function (el) { el.content = el.content.replace("Loopsoha", brand); });

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", function () { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }); });
  }

  var form = document.getElementById("contact-form");
  Array.prototype.forEach.call(document.querySelectorAll("[data-prefill]"), function (link) {
    link.addEventListener("click", function () {
      var message = document.getElementById("message");
      if (message && !message.value.trim()) message.value = link.getAttribute("data-prefill");
    });
  });
  if (form) form.addEventListener("submit", function (event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    if (!form.reportValidity()) return;
    var values = new FormData(form);
    var wantsSample = values.get("sample") === "yes";
    var subject = (wantsSample ? "Free sample request — " : "Free 15-minute call request — ") + String(values.get("name") || "").trim();
    var body = ["Hello " + brand + ",", "", wantsSample ? "I'd like a free sample promo image, and I'm happy to talk on a free 15-minute call." : "I'd like to book a free 15-minute call.", "", "Name: " + String(values.get("name") || "").trim(), "Email: " + String(values.get("email") || "").trim(), "Company: " + (String(values.get("company") || "").trim() || "Not provided"), "", "Details:", String(values.get("message") || "").trim() || "Not provided", ""].join("\n");
    var href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    status.textContent = "Your email app should open with a draft. If it does not, email " + email + " to get in touch.";
    window.location.href = href;
  });
}());
