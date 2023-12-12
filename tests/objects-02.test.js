/* eslint-disable no-undef */
require('../src/objects-02');

const colorMap = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  yellow: '#ffff00',
  magenta: '#ff00ff',
  cyan: '#00ffff',
  black: '#000000',
  white: '#ffffff',
  purple: '#800080',
  orange: '#ffa500',
  brown: '#a52a2a',
  gray: '#808080',
  pink: '#ffc0cb',
  beige: '#f5f5dc',
  olive: '#808000',
  maroon: '#800000',
  teal: '#008080',
  indigo: '#4b0082',
  navy: '#000080',
  violet: '#ee82ee',
  tan: '#d2b48c',
  silver: '#c0c0c0',
  aqua: '#00ffff',
  lavender: '#e6e6fa',
  turquoise: '#40e0d0',
};

// Function to get the hex color value for a given color name
function getColorValue(color) {
  return colorMap[color] || null;
}

// Function to test if a color is in the color map
function testForColor(color) {
  // eslint-disable-next-line no-prototype-builtins
  return colorMap.hasOwnProperty(color);
}

module.exports = { getColorValue, testForColor };
test('getColorValue', () => {
  expect(getColorValue('red')).toBe('#ff0000');
  expect(getColorValue('green')).toBe('#00ff00');
  expect(getColorValue('blue')).toBe('#0000ff');
  expect(getColorValue('yellow')).toBe('#ffff00');
  expect(getColorValue('magenta')).toBe('#ff00ff');
  expect(getColorValue('cyan')).toBe('#00ffff');
  expect(getColorValue('black')).toBe('#000000');
  expect(getColorValue('white')).toBe('#ffffff');
  expect(getColorValue('purple')).toBe('#800080');
  expect(getColorValue('orange')).toBe('#ffa500');
  expect(getColorValue('brown')).toBe('#a52a2a');
  expect(getColorValue('gray')).toBe('#808080');
  expect(getColorValue('pink')).toBe('#ffc0cb');
  expect(getColorValue('beige')).toBe('#f5f5dc');
  expect(getColorValue('olive')).toBe('#808000');
  expect(getColorValue('maroon')).toBe('#800000');
  expect(getColorValue('teal')).toBe('#008080');
  expect(getColorValue('indigo')).toBe('#4b0082');
  expect(getColorValue('navy')).toBe('#000080');
  expect(getColorValue('violet')).toBe('#ee82ee');
  expect(getColorValue('tan')).toBe('#d2b48c');
  expect(getColorValue('silver')).toBe('#c0c0c0');
  expect(getColorValue('aqua')).toBe('#00ffff');
  expect(getColorValue('lavender')).toBe('#e6e6fa');
  expect(getColorValue('turquoise')).toBe('#40e0d0');
});

test('testForColor', () => {
  expect(testForColor('red')).toBe(true);
  expect(testForColor('green')).toBe(true);
  expect(testForColor('blue')).toBe(true);
  expect(testForColor('yellow')).toBe(true);
  expect(testForColor('magenta')).toBe(true);
  expect(testForColor('cyan')).toBe(true);
  expect(testForColor('black')).toBe(true);
  expect(testForColor('white')).toBe(true);
  expect(testForColor('purple')).toBe(true);
  expect(testForColor('orange')).toBe(true);
  expect(testForColor('brown')).toBe(true);
  expect(testForColor('gray')).toBe(true);
  expect(testForColor('pink')).toBe(true);
  expect(testForColor('beige')).toBe(true);
  expect(testForColor('olive')).toBe(true);
  expect(testForColor('maroon')).toBe(true);
  expect(testForColor('teal')).toBe(true);
  expect(testForColor('indigo')).toBe(true);
  expect(testForColor('navy')).toBe(true);
  expect(testForColor('violet')).toBe(true);
  expect(testForColor('tan')).toBe(true);
  expect(testForColor('silver')).toBe(true);
  expect(testForColor('aqua')).toBe(true);
  expect(testForColor('lavender')).toBe(true);
  expect(testForColor('turquoise')).toBe(true);
  expect(testForColor('beige')).toBe(true);
  expect(testForColor('olive')).toBe(true);
  expect(testForColor('maroon')).toBe(true);
  expect(testForColor('teal')).toBe(true);
  expect(testForColor('indigo')).toBe(true);
  expect(testForColor('azure')).toBe(false);
});
