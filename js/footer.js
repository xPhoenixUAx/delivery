export function initFooter() {
  // Set current year in footer
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Add event listeners for footer links
  const footerLinks = document.querySelectorAll(".footer-link");
  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      // You can add more custom behavior here, like analytics tracking
      console.log(`Clicked on: ${link.textContent}`);
    });
  });

  // You can add more footer-specific functionality here
}

// Example of how to use this module:
// import { initFooter } from './footer.js';
// document.addEventListener('DOMContentLoaded', initFooter);
