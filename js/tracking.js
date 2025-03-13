export function initTracking() {
  const trackingForm = document.getElementById("tracking-form");
  let alertTimeout;

  // Add animation classes when page loads
  document.addEventListener("DOMContentLoaded", function () {
    const trackingForm = document.querySelector(".tracking-form");
    const input = document.querySelector(".input");
    const button = document.querySelector(".btn-track");

    if (trackingForm) trackingForm.style.opacity = "0";
    if (input) input.style.opacity = "0";
    if (button) button.style.opacity = "0";

    setTimeout(() => {
      if (trackingForm) {
        trackingForm.style.opacity = "1";
        trackingForm.style.animation = "fadeInUp 0.8s ease forwards";
      }
      if (input) {
        input.style.opacity = "1";
        input.style.animation = "fadeInUp 1s ease forwards";
      }
      if (button) {
        button.style.opacity = "1";
        button.style.animation = "fadeInUp 1.2s ease forwards";
      }
    }, 300);
  });

  trackingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const trackingNumber = document.getElementById("tracking-number").value;

    // Add button press effect
    const button = document.querySelector(".btn-track");
    button.style.transform = "scale(0.98)";
    setTimeout(() => {
      button.style.transform = "";
    }, 200);

    // Show custom styled alert
    showCustomAlert(
      `Tracking ID ${trackingNumber} received. Our manager will contact you shortly with the information.`
    );

    // Clear the input field after showing the alert
    document.getElementById("tracking-number").value = "";
  });

  function showCustomAlert(message) {
    // Clear any existing timeout to prevent multiple alerts
    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }

    // Create alert element if it doesn't exist
    let alertElement = document.getElementById("custom-alert");
    if (!alertElement) {
      alertElement = document.createElement("div");
      alertElement.id = "custom-alert";
      document.body.appendChild(alertElement);
    }

    // Set alert content
    alertElement.textContent = message;

    // Show the alert with animation
    alertElement.style.display = "block";
    alertElement.style.animation =
      "slideDown 0.5s forwards, fadeOut 0.5s forwards 4.5s";

    // Hide the alert after animation completes
    alertTimeout = setTimeout(() => {
      alertElement.style.display = "none";
      alertElement.style.animation = "";
    }, 5000);
  }

  // Add ripple effect to button
  const button = document.querySelector(".btn-track");
  if (button) {
    button.addEventListener("click", function (e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;

      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }

  // Add focus effect to input
  const input = document.querySelector(".input");
  if (input) {
    input.addEventListener("focus", function () {
      this.parentElement.style.transform = "translateY(-5px)";
    });

    input.addEventListener("blur", function () {
      this.parentElement.style.transform = "";
    });
  }
}
