(function () {
  "use strict";

  function setActiveNav() {
    var path = window.location.pathname.replace(/\\/g, "/");
    var file = path.split("/").pop() || "index.html";
    if (file === "" || file === "/") file = "index.html";

    document.querySelectorAll("[data-nav]").forEach(function (link) {
      var target = link.getAttribute("data-nav");
      if (!target) return;

      var isActive = false;
      if (target === "about" && file === "about.html") {
        isActive = true;
      } else if (target === "contact" && file === "contact.html") {
        isActive = true;
      } else if (target === "services" && path.indexOf("/services/") !== -1) {
        isActive = true;
      } else if (target === file || target === "services/" + file) {
        isActive = true;
      }

      if (isActive) {
        link.classList.add("active");
        // The Services toggle opens a menu rather than pointing at a page, so
        // only the real links claim to be the current one.
        if (!link.classList.contains("dropdown-toggle")) {
          link.setAttribute("aria-current", "page");
        }
      }
    });
  }

  // Web3Forms relays each submission to the inbox its access key belongs to.
  // The key below is a deliberate placeholder (V2-QUESTIONS.md Q2): until it is
  // replaced with a real one the forms keep the older mailto: behaviour, so the
  // site is never worse off than before but also cannot post into a void.
  var WEB3FORMS_KEY = "dec27af9-4490-4cce-a17c-ca91fcfada92";
  var WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
  var ENQUIRY_EMAIL = "info@archinovastructures.co.uk";

  function relayConfigured() {
    return WEB3FORMS_KEY.indexOf("REPLACE-WITH") !== 0;
  }

  // Fields are read by name and skipped when absent, so the Contact and About
  // forms can carry different sets of inputs without diverging code paths.
  var FIELD_LABELS = [
    ["fullName", "Full Name"],
    ["email", "Email"],
    ["telephone", "Telephone"],
    ["serviceRequired", "Service Required"],
    ["propertyType", "Property Type"],
    ["propertyAddress", "Property Address"],
    ["fileLink", "Link to Drawings"],
    ["preferredContact", "Preferred Contact"],
    ["projectDescription", "Project Details"]
  ];

  function readField(form, name) {
    var radios = form.querySelectorAll('input[name="' + name + '"]');
    if (radios.length && radios[0].type === "radio") {
      var picked = form.querySelector('input[name="' + name + '"]:checked');
      return picked ? picked.value : "";
    }
    var el = form.querySelector('[name="' + name + '"]');
    return el ? String(el.value).trim() : null;
  }

  function collect(form) {
    var fields = {};
    FIELD_LABELS.forEach(function (pair) {
      var value = readField(form, pair[0]);
      if (value === null || value === "") return;
      fields[pair[1]] = value;
    });
    return fields;
  }

  // Retained as the fallback while no access key is set, and as the escape
  // hatch when the relay is unreachable.
  function openMailClient(form, subject) {
    var fields = collect(form);
    var description = fields["Project Details"] || "";
    delete fields["Project Details"];

    var lines = Object.keys(fields).map(function (label) {
      return label + ": " + fields[label];
    });
    var body =
      lines.join("\n") +
      "\n\nProject Details:\n" +
      description +
      "\n\n(Please attach any drawings or photos to this email before sending.)";

    window.location.href =
      "mailto:" + ENQUIRY_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  function send(form, subject) {
    var fields = collect(form);
    fields.access_key = WEB3FORMS_KEY;
    fields.subject = subject;
    fields.from_name = "ARCHINOVA Website";
    fields.replyto = readField(form, "email") || ENQUIRY_EMAIL;

    return fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(fields)
    }).then(function (response) {
      return response.json().then(function (body) {
        if (!response.ok || !body.success) throw new Error(body.message || "Send failed");
        return body;
      });
    });
  }

  function initEnquiryForms() {
    document.querySelectorAll("form[data-enquiry-form]").forEach(function (form) {
      var feedback = form.parentElement.querySelector(".form-feedback-msg");
      var submitBtn = form.querySelector('button[type="submit"]');
      var submitLabel = submitBtn ? submitBtn.textContent : "";

      function say(state, message) {
        if (!feedback) return;
        feedback.className = "form-feedback-msg" + (state ? " is-" + state : "");
        feedback.textContent = message;
      }

      function busy(isBusy) {
        if (!submitBtn) return;
        submitBtn.disabled = isBusy;
        submitBtn.textContent = isBusy ? "Sending…" : submitLabel;
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        say("", "");

        // Bots tick the hidden checkbox; real people never see it.
        var honeypot = form.querySelector('input[name="botcheck"]');
        if (honeypot && honeypot.checked) return;

        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          say("error", "Please complete all required fields correctly.");
          return;
        }

        var subject = "Quote request from " + (readField(form, "fullName") || "website visitor");

        if (!relayConfigured()) {
          openMailClient(form, subject);
          say(
            "success",
            "Opening your email application to send the enquiry. If nothing opens, email us at " +
              ENQUIRY_EMAIL + "."
          );
          form.classList.remove("was-validated");
          return;
        }

        busy(true);
        say("", "Sending your enquiry…");

        send(form, subject)
          .then(function () {
            form.reset();
            form.classList.remove("was-validated");
            say("success", "Thank you — your enquiry has been sent. We will be in touch shortly.");
          })
          .catch(function () {
            say(
              "error",
              "Sorry, your enquiry could not be sent. Please email us directly at " +
                ENQUIRY_EMAIL + "."
            );
          })
          .then(function () {
            busy(false);
          });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveNav();
    initEnquiryForms();
  });
})();
