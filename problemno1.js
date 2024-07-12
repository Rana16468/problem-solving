const people = [
  { name: "Kaspia", age: 25, gender: "female" },
  { name: "Sohel", age: 30, gender: "male" },
  { name: "Arman", age: 35, gender: "male" },
  { name: "Payale", age: 28, gender: "female" },
  { name: "Rana", age: 20, gender: "female" },
];

const filterAndMapNames = (people) => {
  const filteredPeople = people.filter((person) => person.gender !== "female");
  const namesArray = filteredPeople.map((person) => person.name);
  return namesArray;
};

const filteredNames = filterAndMapNames(people);
console.log(filteredNames);
