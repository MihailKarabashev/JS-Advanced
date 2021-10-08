function toStringExtension() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }

    toString() {
      let [nameofInstance, superData] = super
        .toString()
        .split(/\(([^)]+)\)/)
        .map((x) => x.trim());

      let [name, email] = superData.split(", ");

      return `${nameofInstance} (${name}, ${[email]}, subject: ${
        this.subject
      })`;
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }

    toString() {
      let [nameofInstance, superData] = super
        .toString()
        .split(/\(([^)]+)\)/)
        .map((x) => x.trim());

      let [name, email] = superData.split(", ");

      return `${nameofInstance} (${name}, ${[email]}, subject: ${
        this.subject
      })`;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}
