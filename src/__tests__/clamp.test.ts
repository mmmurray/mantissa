import { clamp } from '..';

test('clamp', () => {
  expect(clamp(0, 0, 0)).toBe(0);
  expect(clamp(0.5, 0.5, 0.5)).toBe(0.5);
  expect(clamp(3, 2, 6)).toBe(3);
  expect(clamp(1, 2, 6)).toBe(2);
  expect(clamp(7, 2, 6)).toBe(6);
});

test('clamp with defaults', () => {
  expect(clamp(0)).toBe(0);
  expect(clamp(0.5)).toBe(0.5);
  expect(clamp(1)).toBe(1);
  expect(clamp(-1)).toBe(0);
  expect(clamp(1.001)).toBe(1);
  expect(clamp(22)).toBe(1);
});
