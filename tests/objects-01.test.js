/* eslint-disable no-undef */
require('../src/objects-01');

// Create a pet object with default values
function makePetObject() {
  return {
    name: '',
    age: 0,
    species: '',
    legs: 4,
    hasFur: true,
    bestFriend: '',
  };
}

// Get the pet's name
function getPetName(pet) {
  return pet.name;
}

// Get the pet's age
function getPetAge(pet) {
  return pet.age;
}

// Set the pet's age
function setPetAge(pet, age) {
  pet.age = age;
}

// Determine if the pet is a baby (age < 1)
function isPetABaby(pet) {
  return pet.age < 1;
}

// Add a breed property to the pet
function addPetBreed(pet, breed) {
  if (!pet.breed) {
    pet.breed = [];
  }
  pet.breed.push(breed);
}

// Delete the best friend property from the pet
function deletePetBestFriend(pet) {
  delete pet.bestFriend;
  return pet;
}

// Get an array of keys in the pet object
function getPetKeys(pet) {
  return Object.keys(pet);
}

// Get the number of properties in the pet object
function getPetObjLength(pet) {
  return Object.keys(pet).length;
}

test('makePetObject', () => {
  const aPet = makePetObject();
  expect(typeof aPet).toBe('object');
  expect(typeof aPet.name).toBe('string');
  expect(typeof aPet.age).toBe('number');
  expect(typeof aPet.species).toBe('string');
  expect(typeof aPet.legs).toBe('number');
  expect(typeof aPet.hasFur).toBe('boolean');
  expect(typeof aPet.bestFriend).toBe('string');
});

test('getPetName', () => {
  const aPet = makePetObject();
  expect(getPetName(aPet)).toBe(aPet.name);
});

test('getPetAge', () => {
  const aPet = makePetObject();
  expect(getPetAge(aPet)).toBe(aPet.age);
});

test('setPetAge', () => {
  const aPet = makePetObject();
  setPetAge(aPet, 5);
  expect(aPet.age).toBe(5);
});

test('isPetABaby', () => {
  const aPet = makePetObject();
  setPetAge(aPet, 5);
  expect(isPetABaby(aPet)).toBe(false);
  setPetAge(aPet, 0.5);
  expect(isPetABaby(aPet)).toBe(true);
});

test('addPetBreed', () => {
  const aPet = makePetObject();
  addPetBreed(aPet, 'German Shepherd');
  expect(aPet.breed).toContain('German Shepherd');
});

test('deletePetBestFriend', () => {
  // setup
  const aPet = makePetObject();
  const numberKeys = Object.keys(aPet).length;
  // execute
  const obj = deletePetBestFriend(aPet);
  // verify
  expect(typeof obj).toBe('object');
  expect(Object.keys(obj)).toHaveLength(numberKeys - 1);
  expect(aPet.bestFriend).toBe(undefined);
});

test('getPetKeys', () => {
  const aPet = makePetObject();
  const keys = getPetKeys(aPet);
  expect(keys).toContain('name');
  expect(keys).toContain('age');
  expect(keys).toContain('species');
  expect(keys).toContain('legs');
  expect(keys).toContain('hasFur');
  expect(keys).toContain('bestFriend');
});

test('getPetObjLength', () => {
  const aPet = makePetObject();
  const length = getPetObjLength(aPet);
  expect(length).toBe(6);
});
