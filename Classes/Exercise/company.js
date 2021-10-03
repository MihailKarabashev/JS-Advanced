class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(username, salary, position, department) {
    if (!username || !salary || !position || salary <= 0 || !department) {
      throw new Error("Invalid input!");
    }

    if (!this.departments[department]) {
      this.departments[department] = [];
    }
    this.departments[department].push({ username, salary, position });
    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    let obj = {
      bestDepartment: "",
      averageSalary: 0,
      workers: [],
    };

    for (const key in this.departments) {
      let departmentAverageSalary =
        this.departments[key].reduce(
          (acc, val) => acc + Number(val.salary),
          0
        ) / this.departments[key].length;

      if (obj.averageSalary < departmentAverageSalary) {
        obj.averageSalary = departmentAverageSalary;
        obj.bestDepartment = key;

        for (const value of this.departments[key]) {
          obj.workers.push(value);
        }
      }
    }

    obj.workers.sort(
      (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
    );

    let objValues = Object.values(obj);

    let ss = `Best Department is: ${
      objValues[0]
    }\nAverage salary: ${objValues[1].toFixed(2)}\n`;

    objValues[2].forEach(
      (x) => (ss += `${x.username} ${x.salary} ${x.position}\n`)
    );
    return ss.trim();
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
