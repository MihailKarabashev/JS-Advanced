function validate() {
  document
    .querySelector("#registerForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      let username = formData.get("username");

      console.log(username);
    });
}
