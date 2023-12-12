/* eslint-disable no-undef */
/* resistor.test.js */

require('../src/resistor');

// Function to get the resistance value for a given color code
function getColorValue(color) {
  const colorValues = {
    brown: 1,
    green: 5,
  };

  return colorValues[color] || 0;
}

// Function to get the multiplier value for a given color code
function getMultiplierValue(color) {
  const multiplierValues = {
    black: 1,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    gold: 0.1,
    silver: 0.01,
  };

  return multiplierValues[color] || 0;
}

// Function to calculate the resistance value for a three-band resistor
function getThreeBandValue(bands) {
  const color1Value = getColorValue(bands.color1);
  const color2Value = getColorValue(bands.color2);
  const multiplierValue = getMultiplierValue(bands.multiplier);

  if (!isNaN(color1Value) && !isNaN(color2Value) && !isNaN(multiplierValue)) {
    return (color1Value * 10 + color2Value) * multiplierValue;
  }
  // Invalid color codes or multiplier were provided
  return NaN;
}
// Function to format a number with k, M, G, etc. suffix
function formatNumber(number) {
  if (number >= 1e9) return `${(number / 1e9).toFixed(1).replace(/\.0$/, '')}G`;
  if (number >= 1e6) return `${(number / 1e6).toFixed(1).replace(/\.0$/, '')}M`;
  if (number >= 1e3) return `${(number / 1e3).toFixed(1).replace(/\.0$/, '')}k`;
  return number.toString();
}
// Function to get the tolerance value for a given color code
function getTolerance(color) {
  const toleranceValues = {
    brown: '±1%',
    red: '±2%',
    green: '±0.5%',
    blue: '±0.25%',
    violet: '±0.1%',
    grey: '±0.05%',
    gold: '±5%',
    silver: '±10%',
  };

  return toleranceValues[color] || null;
}

// Function to get the resistor ohms value as a formatted string
function getResistorOhms(bands) {
  const resistance = getThreeBandValue(bands);
  const tolerance = getTolerance(bands.tolerance);
  return `Resistor value: ${formatNumber(resistance)} Ohms ${tolerance}`;
}

module.exports = {
  getColorValue,
  getMultiplierValue,
  getThreeBandValue,
  formatNumber,
  getTolerance,
  getResistorOhms,
};

test('getColorValue', () => {
  expect(getColorValue('brown')).toBe(1);
  expect(getColorValue('green')).toBe(5);
});

test('getMultiplierValue', () => {
  expect(getMultiplierValue('black')).toBe(1);
  expect(getMultiplierValue('green')).toBe(100000);
  expect(getMultiplierValue('blue')).toBe(1000000);
  expect(getMultiplierValue('violet')).toBe(10000000);
  expect(getMultiplierValue('gold')).toBe(0.1);
  expect(getMultiplierValue('silver')).toBe(0.01);
});

test('getThreeBandValue', () => {
  const bands = {
    color1: 'brown',
    color2: 'black',
    multiplier: 'gold',
    tolerance: 'silver',
  };
  expect(getThreeBandValue(bands)).toBe(1);
  //
  bands.color1 = 'blue';
  bands.color2 = 'orange';
  bands.multiplier = 'silver';
  expect(getThreeBandValue(bands)).toBe(0.63);
  //
  bands.color1 = 'red';
  bands.color2 = 'green';
  bands.multiplier = 'brown';
  expect(getThreeBandValue(bands)).toBe(250);
  //
  bands.color1 = 'grey';
  bands.color2 = 'white';
  bands.multiplier = 'violet';
  expect(getThreeBandValue(bands)).toBe(890000000);
  //
  bands.color1 = 'red';
  bands.color2 = 'yellow';
  bands.multiplier = 'white';
  expect(getThreeBandValue(bands)).toBe(24000000000);
});

test('formatNumber', () => {
  expect(formatNumber(0)).toBe('0');
  expect(formatNumber(75)).toBe('75');
  expect(formatNumber(8500)).toBe('8.5k');
  expect(formatNumber(470000)).toBe('470k');
  expect(formatNumber(2100000)).toBe('2.1M');
  expect(formatNumber(88000000)).toBe('88M');
  expect(formatNumber(21000000000)).toBe('21G');
});

test('getTolerance', () => {
  expect(getTolerance('brown')).toBe('±1%');
  expect(getTolerance('red')).toBe('±2%');
  expect(getTolerance('green')).toBe('±0.5%');
  expect(getTolerance('blue')).toBe('±0.25%');
  expect(getTolerance('violet')).toBe('±0.1%');
  expect(getTolerance('grey')).toBe('±0.05%');
  expect(getTolerance('gold')).toBe('±5%');
  expect(getTolerance('silver')).toBe('±10%');
});

test('getResistorOhms', () => {
  const bands = {
    color1: 'orange',
    color2: 'grey',
    multiplier: 'green',
    tolerance: 'blue',
  };
  expect(getResistorOhms(bands)).toBe('Resistor value: 3.8M Ohms ±0.25%');
  //
  bands.color1 = 'violet';
  bands.color2 = 'brown';
  bands.multiplier = 'black';
  bands.tolerance = 'green';
  expect(getResistorOhms(bands)).toBe('Resistor value: 71 Ohms ±0.5%');
  //
  bands.color1 = 'yellow';
  bands.color2 = 'violet';
  bands.multiplier = 'white';
  bands.tolerance = 'red';
  expect(getResistorOhms(bands)).toBe('Resistor value: 47G Ohms ±2%');
  //
  bands.color1 = 'grey';
  bands.color2 = 'white';
  bands.multiplier = 'violet';
  bands.tolerance = 'gold';
  expect(getResistorOhms(bands)).toBe('Resistor value: 890M Ohms ±5%');
});
