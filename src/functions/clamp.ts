export const clamp = (value: number, min = 0, max = 1) =>
  Math.max(min, Math.min(max, value));
