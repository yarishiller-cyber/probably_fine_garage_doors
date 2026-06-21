/* Probably Fine Garage Doors — site behaviour (vanilla, no deps).
 * Mobile nav, footer price reveal, opener "view more", and form submission
 * (Supabase REST insert with a graceful mailto: fallback so leads never vanish).
 */
(function () {
  "use strict";

  // ---- Mobile nav toggle ----
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  if (nav && navToggle) {
    navToggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      navToggle.setAttribute("aria-expanded", String(!open));
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.setAttribute("data-open", "false"); navToggle.setAttribute("aria-expanded", "false"); });
    });
  }

  // ---- Footer price reveal toggle (degrades to visible if no JS) ----
  var priceToggle = document.getElementById("priceToggle");
  var prices = document.getElementById("footerPrices");
  if (priceToggle && prices) {
    var priceIcon = priceToggle.querySelector("svg") ? priceToggle.querySelector("svg").outerHTML : "";
    priceToggle.addEventListener("click", function () {
      var open = priceToggle.getAttribute("aria-expanded") === "true";
      priceToggle.setAttribute("aria-expanded", String(!open));
      prices.hidden = open;
      priceToggle.innerHTML = priceIcon + " " + (open ? "See our prices" : "Hide prices");
    });
  }

  // ---- Opener "view more" toggle ----
  var openerToggle = document.getElementById("openerToggle");
  if (openerToggle) {
    openerToggle.addEventListener("click", function () {
      var open = openerToggle.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".opener-extra").forEach(function (el) { el.hidden = open; });
      openerToggle.setAttribute("aria-expanded", String(!open));
      openerToggle.textContent = open ? "View more openers" : "Show fewer openers";
    });
  }

  // ---- Forms: Supabase REST insert, mailto fallback ----
  var SB_URL = "https://zjtbuzinntdkerhhavxw.supabase.co";
  var SB_KEY = "sb_publishable_iCLEk8LN3HnSOIEZDbGauw_EZjPqy2b";
  var EMAIL = "info@probablyfinegaragedoors.ca";

  function serialize(form) {
    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = v; });
    return data;
  }

  function mailtoFallback(form, data) {
    var subject = encodeURIComponent((form.id === "partnerForm" ? "Partner application" : "Garage door quote request") + " — " + (data.name || "website"));
    var lines = Object.keys(data).map(function (k) { return k + ": " + data[k]; });
    var body = encodeURIComponent(lines.join("\n"));
    window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;
  }

  function wireForm(id) {
    var form = document.getElementById(id);
    if (!form) return;
    var statusEl = form.querySelector(".form__status");
    var endpoint = form.getAttribute("data-endpoint");
    var redirect = form.getAttribute("data-redirect");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = serialize(form);
      data.source = location.pathname;
      data.created_at = new Date().toISOString();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.style.opacity = ".7"; }
      if (statusEl) { statusEl.className = "form__status"; statusEl.textContent = "Sending…"; }

      fetch(SB_URL + "/rest/v1/" + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SB_KEY,
          "Authorization": "Bearer " + SB_KEY,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(data)
      }).then(function (res) {
        if (res.ok) { window.location.href = redirect; return; }
        throw new Error("status " + res.status);
      }).catch(function () {
        // Backend not reachable — never lose the lead; open the email client pre-filled.
        if (statusEl) { statusEl.className = "form__status ok"; statusEl.textContent = "Opening your email app so your message reaches us…"; }
        mailtoFallback(form, data);
        if (btn) { btn.disabled = false; btn.style.opacity = "1"; }
      });
    });
  }
  wireForm("leadForm");
  wireForm("partnerForm");
})();
