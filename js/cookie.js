export function initCookieConsent() {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");

  // Ховаємо вікно одразу перед перевіркою (щоб уникнути мерехтіння)
  cookieConsent.style.display = "none";

  // Перевіряємо, чи користувач уже прийняв cookies
  if (localStorage.getItem("cookieConsent") === "accepted") {
    return; // Якщо cookies прийняті, вікно не з'являється
  }

  // Якщо згода не була прийнята, показуємо вікно після затримки
  setTimeout(() => {
    cookieConsent.style.display = "block";
  }, 1000);

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    cookieConsent.style.display = "none";
    console.log("Cookies accepted");
  });

  declineBtn.addEventListener("click", () => {
    localStorage.removeItem("cookieConsent"); // Видаляємо запис про згоду
    cookieConsent.style.display = "none";
    console.log("Cookies declined");
  });
}
