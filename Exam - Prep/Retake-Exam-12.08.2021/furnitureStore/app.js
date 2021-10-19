window.addEventListener("load", solve);

function solve() {
  let model = document.querySelector("#model");
  let year = document.querySelector("#year");
  let description = document.querySelector("#description");
  let price = document.querySelector("#price");
  let tbody = document.querySelector("#information > #furniture-list");
  let totalPriceElement = document.querySelector(".total-price");

  document.querySelector("form").addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.tagName === "BUTTON") {
      if (
        model.value &&
        description.value &&
        year.value &&
        price.value &&
        year.value > 0 &&
        price.value > 0
      ) {
        let trHidden = document.createElement("tr");
        trHidden.classList.add("hide");

        let tdYear = document.createElement("td");
        tdYear.textContent = `Year: ${year.value}`;

        let tdDesc = document.createElement("td");
        tdDesc.textContent = `Description: ${description.value}`;
        tdDesc.setAttribute("colspan", "3");

        trHidden.appendChild(tdYear);
        trHidden.appendChild(tdDesc);

        let tr = document.createElement("tr");
        tr.classList.add("info");

        let tdModel = document.createElement("td");
        tdModel.textContent = model.value;

        let tdPrice = document.createElement("td");
        tdPrice.textContent = Number(price.value).toFixed(2);

        let tdButtons = document.createElement("td");

        let moreBtn = document.createElement("button");
        moreBtn.classList.add("moreBtn");
        moreBtn.textContent = "More Info";

        let buyBtn = document.createElement("button");
        buyBtn.classList.add("buyBtn");
        buyBtn.textContent = "Buy it";

        tdButtons.appendChild(moreBtn);
        tdButtons.appendChild(buyBtn);

        tr.appendChild(tdModel);
        tr.appendChild(tdPrice);
        tr.appendChild(tdButtons);

        tbody.appendChild(tr);
        tbody.appendChild(trHidden);

        clearInputFields();

        moreBtn.addEventListener("click", function (e) {
          if (e.target.textContent === "More Info") {
            e.target.textContent = "Less Info";
            trHidden.style.display = "contents";
          } else {
            e.target.textContent = "More Info";
            trHidden.style.display = "none";
          }
        });

        buyBtn.addEventListener("click", function () {
          let totalPrice = Number(totalPriceElement.textContent);
          totalPrice += Number(tdPrice.textContent);
          totalPriceElement.textContent = Number(totalPrice).toFixed(2);

          tr.remove();
          trHidden.remove();
        });
      }
    }
  });

  function clearInputFields() {
    model.value = "";
    year.value = "";
    description.value = "";
    price.value = "";
  }
}
