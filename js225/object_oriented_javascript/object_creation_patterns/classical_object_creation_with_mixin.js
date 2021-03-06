function delegate(context, methodOwner, methodName, ...args) {
  return () => methodOwner[methodName].call(context, ...args);
}

function extend(object, mixin) {
  Object.keys(mixin).forEach(methodName => {
    object[methodName]
  });

  return object;
}

const Professional = {
  invoice() {
    console.log(`${this.fullName()} is Asking customer to pay`);
  },

  payTax() {
    console.log(`${this.fullName()} Paying taxes`);
  },
};

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.communicate = () => {
  console.log('Communicating');
};

Person.prototype.eat = () => {
  console.log('Eating');
};

Person.prototype.sleep = () => {
  console.log('Sleeping');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = () => {
  console.log('Diagnosing');
};
Doctor.prototype.constructor = Doctor;

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = () => {
  console.log('Teaching');
};
Professor.prototype.constructor = Professor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = () => {
  console.log('Studying');
};
Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = () => {
  console.log('Researching');
};
GraduateStudent.prototype.constructor = GraduateStudent;
