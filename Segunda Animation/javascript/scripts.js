document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.querySelector(".envelope");
  const triangleTop = document.querySelector(".triangle.top");
  const hearts = document.querySelectorAll(".heart");
  const enviarButton = document.querySelector(".btn-enviar");
  const resetButton = document.querySelector(".btn-reset");
  const card = document.querySelector(".card");

  // Función para mostrar los corazones
  function showHearts() {
    hearts.forEach((heart, index) => {
      setTimeout(() => {
        heart.style.opacity = 1;
        heart.style.animation = "heartAnimation 7s ease forwards";
        setTimeout(() => {
          heart.style.animation = "heartReturnAnimation 1s ease forwards";
        }, 8000);
      }, index * 300);
    });
  }

  function moveCardUp() {
    card.style.animation = "cardUpAnimation 2s ease forwards";
  }

  function moveCardDown() {
    card.style.animation = "cardDownAnimation 2s ease forwards";
  }

  enviarButton.addEventListener("click", function () {
    envelope.classList.add("open");
    triangleTop.classList.add("open");
    triangleTop.classList.add("closed");
    if (envelope.classList.contains("open")) {
      showHearts();
      moveCardUp();
    } else {
      moveCardDown();
    }
  });

  resetButton.addEventListener("click", function () {
    envelope.classList.add("open");
    if (envelope.classList.contains("open")) {
      moveCardDown();
      setTimeout(() => {
        triangleTop.classList.remove("closed");
        triangleTop.classList.remove("open");
      }, 1000);
    }
  });
});
