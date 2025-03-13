export const initHeader = () => {
  const header = document.querySelector(".header");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const logo = document.querySelector(".logo");
  const navLinks = document.querySelectorAll(".nav-link");
  const ctaButton = document.querySelector(".cta-button");

  // Add CTA button if it doesn't exist
  if (!ctaButton && header) {
    const newCtaButton = document.createElement("a");
    newCtaButton.href = "#contact";
    newCtaButton.className = "cta-button";
    newCtaButton.textContent = "Get a Quote";

    const headerContainer = document.querySelector(".header-container");
    if (headerContainer) {
      // Insert before the mobile menu button
      const mobileBtn = headerContainer.querySelector(".mobile-menu-btn");
      if (mobileBtn) {
        headerContainer.insertBefore(newCtaButton, mobileBtn);
      } else {
        headerContainer.appendChild(newCtaButton);
      }
    }
  }

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Prevent body scrolling when menu is open
      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close menu when a menu item is clicked
    const menuItems = navMenu.querySelectorAll("a");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // Scroll effect for header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Add hover effects for nav links
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    // Check if link is active based on current section
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        window.addEventListener("scroll", () => {
          const rect = section.getBoundingClientRect();
          const isInView = rect.top <= 100 && rect.bottom >= 100;

          if (isInView) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      }
    }
  });

  // Add ripple effect to CTA button
  const addRippleEffect = (button) => {
    if (!button) return;

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
  };

  // Add ripple style dynamically
  const style = document.createElement("style");
  style.textContent = `
    .cta-button {
      position: relative;
      overflow: hidden;
    }
    
    .ripple {
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

  // Apply ripple effect to CTA button
  addRippleEffect(document.querySelector(".cta-button"));

  // Add shine effect to logo
  if (logo) {
    const addShineEffect = () => {
      const shine = document.createElement("div");
      shine.classList.add("logo-shine");
      logo.appendChild(shine);

      // Add shine style
      const shineStyle = document.createElement("style");
      shineStyle.textContent = `
        .logo {
          position: relative;
          overflow: hidden;
        }
        
        .logo-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: shine 3s infinite;
          pointer-events: none;
          opacity: 0;
        }
        
        @keyframes shine {
          0% {
            opacity: 0;
            transform: rotate(30deg) translate(-300px, -200px);
          }
          10% {
            opacity: 1;
          }
          20% {
            opacity: 0;
            transform: rotate(30deg) translate(300px, 200px);
          }
          100% {
            opacity: 0;
            transform: rotate(30deg) translate(300px, 200px);
          }
        }
      `;
      document.head.appendChild(shineStyle);
    };

    addShineEffect();
  }
};
