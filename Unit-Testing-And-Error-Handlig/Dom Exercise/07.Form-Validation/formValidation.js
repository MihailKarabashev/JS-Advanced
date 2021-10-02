function validate() {
  let myElement = createElement("div", {}, "Koce");

  console.log(myElement);

  function createElement(element, attr, content) {
    let el = document.createElement(element);
    for (const key in attr) {
      el[key] = attr[key];
    }
    if (content) {
      el.textContent = content;
    }
    return el;
  }
}
