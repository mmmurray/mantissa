import { almostEqual, clamp, lerp, mod, round } from "..";

test("mod", () => {
  expect(mod(-6, 3)).toEqual(0);
  expect(mod(-5, 3)).toEqual(1);
  expect(mod(-4, 3)).toEqual(2);
  expect(mod(-3, 3)).toEqual(0);
  expect(mod(-2, 3)).toEqual(1);
  expect(mod(-1, 3)).toEqual(2);
  expect(mod(0, 3)).toEqual(0);
  expect(mod(1, 3)).toEqual(1);
  expect(mod(2, 3)).toEqual(2);
  expect(mod(3, 3)).toEqual(0);
  expect(mod(4, 3)).toEqual(1);
  expect(mod(5, 3)).toEqual(2);
  expect(mod(6, 3)).toEqual(0);
});

test("lerp", () => {
  expect(lerp(0, 0, 0)).toEqual(0);
  expect(lerp(0, 1, 0.5)).toEqual(0.5);
  expect(lerp(0, 10, 0.5)).toEqual(5);
  expect(lerp(-1, 1, 0.75)).toEqual(0.5);
  expect(lerp(7, 2, 0.4)).toEqual(5);
});

test("almostEqual", () => {
  expect(almostEqual(0, 0)).toEqual(true);
  expect(almostEqual(1, 1)).toEqual(true);
  expect(almostEqual(1, 1 + 1e-10)).toEqual(true);
  expect(almostEqual(1, 1 + 1e-7)).toEqual(false);
});

test("clamp", () => {
  expect(clamp(0)).toEqual(0);
  expect(clamp(0.5)).toEqual(0.5);
  expect(clamp(1)).toEqual(1);
  expect(clamp(-1)).toEqual(0);
  expect(clamp(1.001)).toEqual(1);
  expect(clamp(22)).toEqual(1);
  expect(clamp(0, 0, 0)).toEqual(0);
  expect(clamp(0.5, 0.5, 0.5)).toEqual(0.5);
  expect(clamp(3, 2, 6)).toEqual(3);
  expect(clamp(1, 2, 6)).toEqual(2);
  expect(clamp(7, 2, 6)).toEqual(6);
});

test("round", () => {
  expect(round(-1)).toEqual(-1);
  expect(round(-0.9999)).toEqual(-1);
  expect(round(-0.5001)).toEqual(-1);
  expect(round(-0.5)).toEqual(-0);
  expect(round(-0.4999)).toEqual(-0);
  expect(round(-0.1)).toEqual(-0);
  expect(round(0)).toEqual(0);
  expect(round(0.1)).toEqual(0);
  expect(round(0.4999)).toEqual(0);
  expect(round(0.5)).toEqual(1);
  expect(round(0.5001)).toEqual(1);
  expect(round(0.9999)).toEqual(1);
  expect(round(1)).toEqual(1);
  expect(round(10, 4)).toEqual(12);
  expect(round(12, 4)).toEqual(12);
  expect(round(13, 4)).toEqual(12);
  expect(round(13.9, 4)).toEqual(12);
  expect(round(14, 4)).toEqual(16);
  expect(round(10.31, 0.1)).toEqual(10.3);
  expect(round(10.25, 0.1)).toEqual(10.3);
});
