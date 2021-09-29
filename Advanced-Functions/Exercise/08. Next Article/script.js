function getArticleGenerator(articles) {
  let divElement = document.querySelector("#content");

  return function () {
    if (articles.length > 0) {
      let articleElement = document.createElement("article");
      articleElement.textContent = articles.shift();
      divElement.appendChild(articleElement);
    }
  };
}
