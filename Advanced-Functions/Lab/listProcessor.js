function solve(input) {
  let strCollection = [];
  let obj = {
    add(x) {
      strCollection.push(x);
    },
    remove(el) {
      strCollection = strCollection.filter((x) => x !== el);
    },
    print() {
      console.log(strCollection.join(","));
    },
  };

  input.forEach((x) => {
    let [command, message] = x.split(" ");

    return obj[command](message);
  });
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
