import {
  rangeContains,
  rangeCreate,
  rangeLargest,
  rangesCombine,
  rangeSize,
  rangeSmallest,
  rangesOverlap,
} from "..";

test("rangeCreate", () => {
  expect(rangeCreate()).toEqual(rangeCreate(0, 0));
  expect(rangeCreate(1)).toEqual(rangeCreate(1, 1));
  expect(rangeCreate(1, 5)).toEqual(rangeCreate(1, 5));
});

test("rangeSmallest", () => {
  expect(rangeContains(rangeSmallest(), 0)).toEqual(false);
});

test("rangeLargest", () => {
  expect(rangeContains(rangeLargest(), 0)).toEqual(true);
});

test("rangeContains", () => {
  expect(rangeContains(rangeCreate(-2, 4), 0)).toEqual(true);
  expect(rangeContains(rangeCreate(-2, 4), -2)).toEqual(true);
  expect(rangeContains(rangeCreate(-2, 4), 4)).toEqual(true);
  expect(rangeContains(rangeCreate(-2, 4), -2.1)).toEqual(false);
  expect(rangeContains(rangeCreate(-2, 4), 4.1)).toEqual(false);
});

test("rangesOverlap", () => {
  expect(rangesOverlap(rangeCreate(0, 0), rangeCreate(0, 0))).toEqual(false);
  expect(rangesOverlap(rangeCreate(0, 1), rangeCreate(0, 1))).toEqual(true);
  expect(rangesOverlap(rangeCreate(0, 1), rangeCreate(0, 2))).toEqual(true);
  expect(rangesOverlap(rangeCreate(0, 2), rangeCreate(0, 1))).toEqual(true);
  expect(rangesOverlap(rangeCreate(-2, 4), rangeCreate(-1, 3))).toEqual(true);
  expect(rangesOverlap(rangeCreate(-2, 4), rangeCreate(-3, 3))).toEqual(true);
  expect(rangesOverlap(rangeCreate(-2, 4), rangeCreate(-1, 5))).toEqual(true);
  expect(rangesOverlap(rangeCreate(-2, 4), rangeCreate(-3, 5))).toEqual(true);
  expect(rangesOverlap(rangeCreate(-2, 4), rangeCreate(5, 15))).toEqual(false);
});

test("rangesCombine", () => {
  expect(rangesCombine(rangeCreate(0, 0), rangeCreate(0, 0))).toEqual(
    rangeCreate(0, 0)
  );
  expect(rangesCombine(rangeCreate(0, 2), rangeCreate(1, 3))).toEqual(
    rangeCreate(0, 3)
  );
  expect(rangesCombine(rangeCreate(-3, -1), rangeCreate(1, 3))).toEqual(
    rangeCreate(-3, 3)
  );
});

test("rangeSize", () => {
  expect(rangeSize(rangeCreate(0, 0))).toEqual(0);
  expect(rangeSize(rangeCreate(0, 1))).toEqual(1);
  expect(rangeSize(rangeCreate(-2, 3))).toEqual(5);
});
