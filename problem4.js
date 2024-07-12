const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Accord", year: 2016 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "Tesla", model: "Model 3", year: 2019 },
  { make: "Chevrolet", model: "Impala", year: 2017 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
