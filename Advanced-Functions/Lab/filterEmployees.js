function solve(...input) {
  let parsedArray = JSON.parse(input[0]);
  let criteria = input[1];
  let [key, value] = criteria.split("-");

  criteria === "all"
    ? parsedArray
    : (parsedArray = parsedArray.filter((x) => x[key] === value));

  parsedArray
    .map((x, y) =>
      console.log(`${y}. ${x.first_name} ${x.last_name} - ${x.email}`)
    )
    .join("\n");
}

solve(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "all"
);
