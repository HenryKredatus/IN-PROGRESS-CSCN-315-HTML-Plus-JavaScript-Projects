let person = {
  name: "Peter James",
  age: 28,
  gender: "Male",
  displayname: function () {
    alert(this.name);
  },
};

document.write(person.name + "<br />");
document.write(person.age + "<br />");
document.write(person.gender + "<br />");
console.log(person);
