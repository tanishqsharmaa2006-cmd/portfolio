// Custom cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Parallax effect
document.addEventListener("mousemove", e => {
  document.querySelector(".hero-text").style.transform =
    `translate(${e.clientX * 0.01}px, ${e.clientY * 0.01}px)`;
});

// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    let rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.transform = "scale(1)";
      card.style.opacity = 1;
    }
  });
});
