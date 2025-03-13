export function setCurrentYear() {
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}

export function addFooterLinkHoverEffect() {
  const footerLinks = document.querySelectorAll(".footer-link");

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      // Add subtle glow effect
      this.style.textShadow = "0 0 8px rgba(255, 255, 255, 0.5)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.textShadow = "";
    });
  });
}

export function addStaggeredAnimationToFooterSections() {
  const footerSections = document.querySelectorAll(".footer-section");

  setTimeout(() => {
    footerSections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }, index * 200);
    });
  }, 300);
}

export function animateFooterBottom() {
  const footerBottom = document.querySelector(".footer-bottom");

  setTimeout(() => {
    if (footerBottom) {
      footerBottom.style.opacity = "1";
    }
  }, 1000);
}

export function addRippleEffectToFooterLinks() {
  const footerLinks = document.querySelectorAll(".footer-link");

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
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
  });
}

export function addRippleStyle() {
  const style = document.createElement("style");
  style.textContent = `
    .footer .ripple {
      position: absolute;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

export function initAllFooterEffects() {
  setCurrentYear();
  addFooterLinkHoverEffect();
  addStaggeredAnimationToFooterSections();
  animateFooterBottom();
  addRippleEffectToFooterLinks();
  addRippleStyle();
}
