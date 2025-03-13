// // Automatically call the function when the page loads
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
};
