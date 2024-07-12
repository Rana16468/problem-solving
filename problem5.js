const people = [
  { name: "Kaspia", age: 25, gender: "female" },
  { name: "Sohel", age: 30, gender: "male" },
  { name: "Arman", age: 35, gender: "male" },
  { name: "Payale", age: 28, gender: "female" },
  { name: "Rana", age: 20, gender: "female" },
];
const modifyAgeByName = (people, personName, newAge) => {
  const person = people.find((p) => p.name === personName);

  if (person) {
    person.age = newAge;
  } else {
    console.log(`Person with name ${personName} not found.`);
  }

  return people;
};

const updatedPeople = modifyAgeByName(people, "Sohel", 24);
console.log(updatedPeople);
