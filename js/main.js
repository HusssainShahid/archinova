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
      if (target === "home" && (file === "index.html" || file === "")) {
        isActive = true;
      } else if (target === "about" && file === "about.html") {
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

  function initContactForm() {
    var form = document.getElementById("enquiry-form");
    if (!form) return;

    var feedback = document.getElementById("form-feedback");

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

      var name = form.querySelector('[name="fullName"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var phone = form.querySelector('[name="telephone"]').value.trim();
      var service = form.querySelector('[name="serviceRequired"]').value;
      var propertyType = form.querySelector('[name="propertyType"]').value;
      var address = form.querySelector('[name="propertyAddress"]').value.trim();
      var description = form.querySelector('[name="projectDescription"]').value.trim();
      var preferred = form.querySelector('input[name="preferredContact"]:checked');
      var preferredVal = preferred ? preferred.value : "Email";

      var subject = encodeURIComponent("Quote request from " + name);
      var body = encodeURIComponent(
        "Full Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Telephone: " + phone + "\n" +
        "Service Required: " + service + "\n" +
        "Property Type: " + propertyType + "\n" +
        "Property Address: " + address + "\n" +
        "Preferred Contact: " + preferredVal + "\n\n" +
        "Project Description:\n" + description + "\n\n" +
        "(Please attach any drawings or photos in your email reply.)"
      );

      window.location.href =
        "mailto:info@archinovastructures.co.uk?subject=" + subject + "&body=" + body;

      if (feedback) {
        feedback.className = "form-feedback-msg is-success";
        feedback.textContent =
          "Opening your email client to send the enquiry. If nothing opens, email us at info@archinovastructures.co.uk.";
      }

      form.classList.remove("was-validated");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveNav();
    initContactForm();
  });
})();
