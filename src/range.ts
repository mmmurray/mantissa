import { Range } from "./types";

export const rangeCreate = (min: number = 0, max: number = min): Range => {
  return { min, max };
};

export const rangeSmallest = (): Range => {
  return rangeCreate(Infinity, -Infinity);
};

export const rangeLargest = (): Range => {
  return rangeCreate(-Infinity, Infinity);
};

export const rangeContains = (r: Range, p: number): boolean => {
  return p >= r.min && p <= r.max;
};

export const rangesOverlap = (r1: Range, r2: Range): boolean => {
  return r1.max > r2.min && r1.min < r2.max;
};

export const rangesCombine = (r1: Range, r2: Range): Range => {
  return { min: Math.min(r1.min, r2.min), max: Math.max(r1.max, r2.max) };
};

export const rangeSize = (r: Range) => r.max - r.min;
