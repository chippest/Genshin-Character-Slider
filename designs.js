document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".range-slider");
  const thumb = document.querySelector(".range-thumb");
  const track = document.querySelector(".range-track");
  const elementSelectors = document.querySelector("#elementSelectors");
  const stripes = document.querySelectorAll(".stripe");

  let isDragging = false;

  const updateThumb = (offsetY, rect) => {
    thumb.style.top = `${offsetY}px`;

    const percentage = 100 - Math.round((offsetY / rect.height) * 100);
    console.log(`${percentage}%`);

    const thumbHeight = thumb.offsetHeight;
    const gap = 5; // Adjust gap
    const topRight = ((offsetY - thumbHeight / 2 - gap) / rect.height) * 100;
    const bottomRight = ((offsetY + thumbHeight / 2 + gap) / rect.height) * 100;

    track.style.setProperty("--topRight", `${topRight}%`);
    track.style.setProperty("--bottomRight", `${bottomRight}%`);
  };

  const centerThumb = () => {
    const rect = slider.getBoundingClientRect();
    const offsetY = rect.height / 2;
    updateThumb(offsetY, rect);
  };

  const updateStripes = () => {
    const rect = elementSelectors.getBoundingClientRect();
    const top = ((rect.top - 20) / window.innerHeight) * 100;
    const bottom = ((rect.top + rect.height) / window.innerHeight) * 100;
    const gap = 2; // Adjust gap between --1up and --1down

    stripes.forEach((stripe) => {
      stripe.style.setProperty("--1up", `${top}%`);
      console.log(top);
      stripe.style.setProperty("--1down", `${bottom + gap}%`);
      console.log(bottom + gap);
    });
  };

  thumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    e.preventDefault(); // Prevent text selection
    document.body.style.userSelect = "none"; // Disable text selection
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = ""; // Enable text selection
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const rect = slider.getBoundingClientRect();
      let offsetY = e.clientY - rect.top;
      offsetY = Math.max(0, Math.min(offsetY, rect.height));
      updateThumb(offsetY, rect);
    }
  });

  document.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.userSelect = ""; // Enable text selection
    }
  });

  window.addEventListener("resize", () => {
    centerThumb();
    updateStripes();
  }); // Update on window resize

  centerThumb(); // Center the thumb by default
});
