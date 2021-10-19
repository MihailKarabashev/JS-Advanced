window.addEventListener("load", solution);

function solution() {
  let fullName = document.querySelector("#fname");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");
  let address = document.querySelector("#address");
  let code = document.querySelector("#code");
  let infoPreview = document.querySelector("#infoPreview");

  let editBtn = document.querySelector("#editBTN");
  let continueBtn = document.querySelector("#continueBTN");
  let submitBtn = document.querySelector("#submitBTN");
  let block = document.querySelector("#block");

  document.querySelector("#submitBTN").addEventListener("click", function (e) {
    if (fullName.value && email.value) {
      let trFullName = document.createElement("li");
      trFullName.textContent = `Full Name: ${fullName.value}`;

      let trEmail = document.createElement("li");
      trEmail.textContent = `Email: ${email.value}`;

      let trPhone = document.createElement("li");
      trPhone.textContent = `Phone Number: ${phone.value}`;

      let trAddress = document.createElement("li");
      trAddress.textContent = `Address: ${address.value}`;

      let trCode = document.createElement("li");
      trCode.textContent = `Postal Code: ${code.value}`;

      infoPreview.appendChild(trFullName);
      infoPreview.appendChild(trEmail);
      infoPreview.appendChild(trPhone);
      infoPreview.appendChild(trAddress);
      infoPreview.appendChild(trCode);

      e.target.setAttribute("disabled", "true");
      editBtn.removeAttribute("disabled");
      continueBtn.removeAttribute("disabled");

      clearInputs();

      editBtn.addEventListener("click", function () {
        fullName.value = trFullName.textContent.split(": ")[1].trim();
        email.value = trEmail.textContent.split(": ")[1].trim();
        phone.value = trPhone.textContent.split(": ")[1].trim();
        address.value = trAddress.textContent.split(": ")[1].trim();
        code.value = trCode.textContent.split(": ")[1].trim();

        submitBtn.removeAttribute("disabled");
        editBtn.setAttribute("disabled", "true");
        continueBtn.setAttribute("disabled", "true");
        clearPreviewDetails(trFullName, trEmail, trPhone, trAddress, trCode);
      });

      continueBtn.addEventListener("click", function (e) {
        while (block.firstChild) {
          block.firstChild.remove();
        }

        let h3Element = document.createElement("h3");
        h3Element.textContent = "Thank you for your reservation!";

        block.appendChild(h3Element);
      });

      function clearPreviewDetails(...details) {
        for (const detail of details) {
          detail.remove();
        }
      }
    }
  });

  function clearInputs() {
    fullName.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    code.value = "";
  }
}
