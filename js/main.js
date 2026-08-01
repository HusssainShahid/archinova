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
        if (link.classList.contains("dropdown-toggle")) {
          link.setAttribute("aria-current", "page");
        }
      }
    });
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

  function initEnquiryForms() {
    document.querySelectorAll("form[data-enquiry-form]").forEach(function (form) {
      var feedback = form.parentElement.querySelector(".form-feedback-msg");

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (feedback) {
          feedback.className = "form-feedback-msg";
          feedback.textContent = "";
        }

        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          if (feedback) {
            feedback.className = "form-feedback-msg is-error";
            feedback.textContent = "Please complete all required fields correctly.";
          }
          return;
        }

        var lines = [];
        var description = "";
        FIELD_LABELS.forEach(function (pair) {
          var value = readField(form, pair[0]);
          if (value === null || value === "") return;
          if (pair[0] === "projectDescription") {
            description = value;
          } else {
            lines.push(pair[1] + ": " + value);
          }
        });

        var name = readField(form, "fullName") || "website visitor";
        var subject = encodeURIComponent("Quote request from " + name);
        var body = encodeURIComponent(
          lines.join("\n") +
            "\n\nProject Details:\n" +
            description +
            "\n\n(Please attach any drawings or photos to this email before sending.)"
        );

        window.location.href =
          "mailto:info@archinovastructures.co.uk?subject=" + subject + "&body=" + body;

        if (feedback) {
          feedback.className = "form-feedback-msg is-success";
          feedback.textContent =
            "Opening your email application to send the enquiry. If nothing opens, email us at info@archinovastructures.co.uk.";
        }

        form.classList.remove("was-validated");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveNav();
    initEnquiryForms();
  });
})();
