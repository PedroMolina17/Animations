document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const buttons = document.querySelectorAll(".container-buttons i");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const action = this.classList[1];
      switch (action) {
        case "fa-backward":
          break;
        case "fa-play":
          audioPlayer.play();
          this.classList.remove("fa-play");
          this.classList.add("fa-pause");
          this.setAttribute("data-action", "pause");
          break;
        case "fa-pause":
          audioPlayer.pause();
          this.classList.remove("fa-pause");
          this.classList.add("fa-play");
          this.setAttribute("data-action", "play");
          break;
        case "fa-forward":
          break;
        default:
          break;
      }
    });
  });
});
