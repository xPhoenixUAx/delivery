export const initHeader = () => {
  const header = document.querySelector(".header");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const logo = document.querySelector(".logo");
  const navLinks = document.querySelectorAll(".nav-link");
  const ctaButton = document.querySelector(".cta-button");

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when a menu item is clicked
    const menuItems = navMenu.querySelectorAll("a");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Add scroll effect for header
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScrollTop = scrollTop;

    // Add blur effect on scroll
    if (scrollTop > 50) {
      header.style.backdropFilter = "blur(10px)";
      header.querySelector(".header-background").style.opacity = "1";
    } else {
      header.style.backdropFilter = "none";
      header.querySelector(".header-background").style.opacity = "0.7";
    }
  });

  // Add hover effect for logo
  logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(1.05) rotate(5deg)";
  });
  logo.addEventListener("mouseout", () => {
    logo.style.transform = "scale(1) rotate(0deg)";
  });

  // Add hover effect for nav links
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "translateY(-2px)";
    });
    link.addEventListener("mouseout", () => {
      link.style.transform = "translateY(0)";
    });
  });

  // Add pulsating effect for CTA button
  if (ctaButton) {
    setInterval(() => {
      ctaButton.style.transform = "scale(1.05)";
      setTimeout(() => {
        ctaButton.style.transform = "scale(1)";
      }, 200);
    }, 2000);
  }
};

// Automatically call the function when the page loads
