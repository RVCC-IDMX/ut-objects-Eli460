/* eslint-disable no-undef */
require('../src/objects-03');

function getVolumeOfBox(box) {
  if (box.width === undefined || box.length === undefined || box.height === undefined) {
    throw new Error('Box object should have properties: width, length, and height');
  }

  const volume = box.width * box.length * box.height;
  return parseFloat(volume.toFixed(2));
}

module.exports = getVolumeOfBox;

test('getVolumeOfBox', () => {
  expect(getVolumeOfBox({ width: 2, length: 5, height: 1 })).toBe(10);
  expect(getVolumeOfBox({ width: 3, length: 3, height: 3 })).toBe(27);
  expect(getVolumeOfBox({ length: 2.4, width: 3, height: 1.8 })).toBe(12.96);
});
