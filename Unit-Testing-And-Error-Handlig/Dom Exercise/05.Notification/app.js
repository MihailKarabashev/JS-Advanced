function notify(message) {
  let divNotification = document.querySelector("#notification");
  divNotification.textContent = message;
  divNotification.style.display = "block";

  divNotification.addEventListener("click", function (e) {
    e.target.style.display = "none";
  });
}
