export function initHoverEffects() {
  const serviceItems = document.querySelectorAll(".service-item");

  // Hover effects enhancement
  serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".service-icon");
      icon.style.transform = "scale(1.1) rotate(5deg)";
    });

    item.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".service-icon");
      icon.style.transform = "scale(1) rotate(0deg)";
    });
  });
}
