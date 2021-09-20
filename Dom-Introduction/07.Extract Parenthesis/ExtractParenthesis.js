function extract(content) {
  return document.getElementById(content).
  textContent.split(/\(([^)]+)\)/).
  filter((x,y) => y % 2 != 0).
  join(';');
}