/* eslint-disable no-undef */
require('../src/objects-04');

// Define an array of employee names
const employeeNames = ['Admin', 'Author', 'Visitor'];

// Function to get the name of one employee by index
function getOneEmployeeName(index) {
  if (index >= 0 && index < employeeNames.length) {
    return employeeNames[index];
  }
  return 'Invalid index';
}

// Function to get an array of all employee names
function getEmployeeNames() {
  return employeeNames;
}

module.exports = { getOneEmployeeName, getEmployeeNames };
test('getOneEmployeeName', () => {
  expect(getOneEmployeeName(0)).toBe('Admin');
  expect(getOneEmployeeName(1)).toBe('Author');
  expect(getOneEmployeeName(2)).toBe('Visitor');
});

test('getEmployeeNames', () => {
  expect(getEmployeeNames()).toEqual(['Admin', 'Author', 'Visitor']);
});
