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
        heart.style.animation = "heartAnimation 2s ease forwards";
        setTimeout(() => {
          heart.style.animation = "heartReturnAnimation 1s ease forwards";
        }, 1000);
      }, index * 100);
    });
  }

  function moveCardUp() {
    card.style.animation = "cardUpAnimation 2s ease forwards";
  }

  function moveCardDown() {
    card.style.animation = "cardDownAnimation 1s ease forwards";
  }

  enviarButton.addEventListener("click", function () {
    envelope.classList.toggle("open");
    triangleTop.classList.toggle("open");
    triangleTop.classList.toggle("closed");
    if (envelope.classList.contains("open")) {
      showHearts();
      moveCardUp();
    } else {
      moveCardDown();
    }
  });

  resetButton.addEventListener("click", function () {
    envelope.classList.remove("open");
    triangleTop.classList.remove("open");
    triangleTop.classList.add("closed");
    setTimeout(() => {
      moveCardDown();
    }, 1000); // Agrega un retraso para que la carta se mueva hacia abajo después de cambiar la clase del triángulo
  });
});
