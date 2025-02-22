export function initCookieConsent() {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");

  function showCookieConsent() {
    cookieConsent.style.display = "block";
  }

  function hideCookieConsent() {
    cookieConsent.style.display = "none";
  }

  // Check if user has already made a choice
  const cookieChoice = localStorage.getItem("cookieConsent");

  if (!cookieChoice || cookieChoice === "declined") {
    // Show the cookie consent modal after a short delay
    setTimeout(showCookieConsent, 1000);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    hideCookieConsent();
    // Here you can add code to enable cookies or tracking
    console.log("Cookies accepted");
  });

  declineBtn.addEventListener("click", () => {
    // When declined, we set the choice but don't store it permanently
    sessionStorage.setItem("cookieConsent", "declined");
    hideCookieConsent();
    // Here you can add code to disable cookies or tracking
    console.log("Cookies declined");
  });

  // Check session storage on page load
  window.addEventListener("load", () => {
    const sessionChoice = sessionStorage.getItem("cookieConsent");
    if (sessionChoice === "declined") {
      showCookieConsent();
    }
  });
}
