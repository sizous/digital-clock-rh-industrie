document.addEventListener("DOMContentLoaded", () => {
  const tempo = document.querySelector(".tempo-indicator");
  let tick = true;

  setInterval(() => {
    tempo.textContent = tick ? "⏱️" : "⏳";
    tick = !tick;
  }, 1000); // Change every second to simulate clock tempo
});
