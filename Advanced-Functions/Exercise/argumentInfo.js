function solve(...args) {
  let objCount = {};

  args.forEach((x) => {
    let typeOfInput = typeof x;
    let valueOfInput = x.toString();

    objCount[typeOfInput] == undefined
      ? (objCount[typeOfInput] = 1)
      : (objCount[typeOfInput] += 1);

    console.log(`${typeOfInput}: ${valueOfInput}`);
  });

  const sortable = Object.entries(objCount)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  for (const key in sortable) {
    console.log(`${key} = ${sortable[key]}`);
  }
}

solve("cat", 42, function () {
  console.log("Hello world!");
});

solve({ name: "bob" }, 3.333, 9.999);
