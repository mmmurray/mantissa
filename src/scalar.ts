import { EPSILON } from "./constants";

export const clamp = (value: number, min = 0, max = 1) =>
  Math.max(min, Math.min(max, value));

export const mod = (dividend: number, divisor: number): number =>
  ((dividend % divisor) + divisor) % divisor;

export const lerp = (value: number, target: number, speed: number) =>
  value * (1 - speed) + target * speed;

export const almostEqual = (v1: number, v2: number): boolean =>
  Math.abs(v1 - v2) < EPSILON;

export const round = (value: number, nearest = 1): number =>
  Math.round(value / nearest) * nearest;
