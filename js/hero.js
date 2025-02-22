export const initHero = () => {
  const heroSection = document.querySelector(".hero");
  const floatingElements = document.querySelectorAll(".floating-element");

  // Parallax effect for floating elements
  window.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    floatingElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute("data-speed")) || 0.05;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });

  // Animate elements on scroll
  const animateOnScroll = () => {
    const scrollPosition = window.scrollY;
    const heroHeight = heroSection.offsetHeight;
    const opacity = 1 - (scrollPosition / heroHeight) * 2;

    heroSection.style.opacity = opacity > 0 ? opacity : 0;
  };

  window.addEventListener("scroll", animateOnScroll);
};

// Automatically call the function when the page loads
