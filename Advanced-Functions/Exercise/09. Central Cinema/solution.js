function solve() {
  let ulSectionArchive = document.querySelector("#archive > ul");

  document.querySelector("body").addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName == "BUTTON" && e.target.textContent == "On Screen") {
      let inputs = e.currentTarget.querySelectorAll(
        "#add-new > div#container > input[type=text]"
      );

      let [name, hall, price] = inputs;
      let priceAsNumber = Number(price.value);

      if (
        name.value.length !== 0 &&
        hall.value.length !== 0 &&
        !isNaN(priceAsNumber)
      ) {
        let ulMovieScreenElement =
          e.currentTarget.querySelector("#movies > ul");
        let liElement = document.createElement("li");

        let spanNameElement = document.createElement("span");
        spanNameElement.textContent = name.value;

        let strongHallElement = document.createElement("strong");
        strongHallElement.textContent = `Hall: ${hall.value}`;

        let divElement = document.createElement("div");
        let strongPriceElement = document.createElement("strong");
        let inputElement = document.createElement("input");
        inputElement.setAttribute("placeholder", "Tickets sold");
        let buttonArchive = document.createElement("button");
        buttonArchive.textContent = "Archive";
        strongPriceElement.textContent = priceAsNumber.toFixed(2);

        divElement.appendChild(strongPriceElement);
        divElement.appendChild(inputElement);
        divElement.appendChild(buttonArchive);

        liElement.appendChild(spanNameElement);
        liElement.appendChild(strongHallElement);
        liElement.appendChild(divElement);

        ulMovieScreenElement.appendChild(liElement);

        name.value = "";
        price.value = "";
        hall.value = "";

        buttonArchive.addEventListener("click", function (ev) {
          if (!isNaN(inputElement.value)) {
            ev.target.parentNode.parentNode.remove();
            let liArchiveSectionElement = document.createElement("li");

            let spanArchiveSectionElement = document.createElement("span");
            spanArchiveSectionElement.textContent = spanNameElement.textContent;

            let strongArchiveSectionElement = document.createElement("strong");
            strongArchiveSectionElement.textContent = `Total amount ${(
              Number(priceAsNumber) * ev.target.previousElementSibling.value
            ).toFixed(2)}`;

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            liArchiveSectionElement.appendChild(spanArchiveSectionElement);
            liArchiveSectionElement.appendChild(strongArchiveSectionElement);
            liArchiveSectionElement.appendChild(deleteButton);

            ulSectionArchive.appendChild(liArchiveSectionElement);

            let clearButton =
              deleteButton.parentNode.parentNode.nextElementSibling;

            deleteButton.addEventListener("click", function (e) {
              e.target.parentNode.remove();
            });

            clearButton.addEventListener("click", function (e) {
              e.target.previousElementSibling.innerHTML = "";
            });
          }
        });
      }
    }
  });
}
