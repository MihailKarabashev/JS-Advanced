function solve() {
  let lectures = [];
  document
    .querySelector(".form-control > button")
    .addEventListener("click", function (e) {
      e.preventDefault();

      let trainings = document.querySelector(".modules");
      let inputs = document.querySelectorAll("form > div > input");
      let lecture = inputs[0];
      let date = inputs[1];
      let modules = document.querySelector("select[name=lecture-module]");

      if (lecture.value && date.value && modules.value !== "Select module") {
        let div = document.createElement("div");
        div.classList.add("module");

        let moduleElement = document.createElement("h3");
        moduleElement.textContent = `${modules.value} - MODULE`;

        let ulElement = document.createElement("ul");

        let liElement = document.createElement("li");
        liElement.classList.add("flex");

        let h4Element = document.createElement("h4");
        h4Element.textContent = `${lecture.value} - ${date.value}`;
        let btnDel = document.createElement("button");
        btnDel.textContent = "Del";
        btnDel.classList.add("red");

        liElement.appendChild(h4Element);
        liElement.appendChild(btnDel);

        ulElement.appendChild(liElement);

        div.appendChild(moduleElement);
        div.appendChild(ulElement);

        let currentModule = trainings.children[0].firstChild;

        if (!currentModule) {
          trainings.appendChild(div);
        }

        // let arr = Array.from(trainings.querySelectorAll("h4"))
        //   .map((x) => x.textContent.split(" - "))
        //   .sort((a, b) => a[1].textContent.localeComapre(b[1].textContent));
        // console.log(arr);
      }
    });
}
