export function initTracking() {
  const trackingForm = document.getElementById("tracking-form");
  let alertTimeout;

  trackingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const trackingNumber = document.getElementById("tracking-number").value;

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

    // Set alert style
    alertElement.style.position = "fixed";
    alertElement.style.top = "20px";
    alertElement.style.left = "50%";
    alertElement.style.transform = "translateX(-50%)";
    alertElement.style.backgroundColor = "#4CAF50";
    alertElement.style.color = "white";
    alertElement.style.padding = "15px";
    alertElement.style.borderRadius = "5px";
    alertElement.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    alertElement.style.zIndex = "1000";
    alertElement.style.textAlign = "center";
    alertElement.style.maxWidth = "80%";

    // Set alert content
    alertElement.textContent = message;

    // Show the alert
    alertElement.style.display = "block";

    // Hide the alert after 5 seconds
    alertTimeout = setTimeout(() => {
      alertElement.style.display = "none";
    }, 5000);
  }
}
