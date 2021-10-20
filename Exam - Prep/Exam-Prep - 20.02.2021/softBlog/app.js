function solve() {
  let creator = document.querySelector("#creator");
  let title = document.querySelector("#title");
  let category = document.querySelector("#category");
  let content = document.querySelector("#content");
  let section = document.querySelector("main > section");
  let archiveSection = document.querySelector(".archive-section");

  document.querySelector(".btn.create").addEventListener("click", function (e) {
    e.preventDefault();

    let article = document.createElement("article");

    let titleElement = document.createElement("h1");
    titleElement.textContent = title.value;

    let categoryElement = document.createElement("p");
    categoryElement.textContent = "Category: ";
    let strongCategoryElement = document.createElement("strong");
    strongCategoryElement.textContent = category.value;
    categoryElement.appendChild(strongCategoryElement);

    let creatorElement = document.createElement("p");
    creatorElement.textContent = "Creator: ";
    let strongCreatorElement = document.createElement("strong");
    strongCreatorElement.textContent = creator.value;
    creatorElement.appendChild(strongCreatorElement);

    let contentElement = document.createElement("p");
    contentElement.textContent = content.value;

    let divButtons = document.createElement("div");
    divButtons.classList.add("buttons");

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btn", "delete");
    btnDelete.textContent = "Delete";
    divButtons.appendChild(btnDelete);

    let btnArchive = document.createElement("button");
    btnArchive.classList.add("btn", "archive");
    btnArchive.textContent = "Archive";
    divButtons.appendChild(btnArchive);

    article.appendChild(titleElement);
    article.appendChild(categoryElement);
    article.appendChild(creatorElement);
    article.appendChild(contentElement);
    article.appendChild(divButtons);

    section.appendChild(article);

    clearInputData();

    btnArchive.addEventListener("click", function (e) {
      let olElement = archiveSection.children[1];

      let arr = Array.from(olElement.querySelectorAll("li"));

      let liElement = document.createElement("li");
      liElement.textContent = titleElement.textContent;
      arr.push(liElement);

      arr
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach((li) => olElement.appendChild(li));

      section.children[1].remove();
    });

    btnDelete.addEventListener("click", function (e) {
      section.children[1].remove();
    });
  });

  function clearInputData() {
    creator.value = "";
    title.value = "";
    category.value = "";
    content.value = "";
  }
}
