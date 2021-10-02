function validate() {
  document.querySelector("#email").addEventListener("change", validateEmail);

  function validateEmail(e) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    !regex.test(e.target.value)
      ? e.target.classList.add("error")
      : e.target.classList.remove("error");
  }
}
