import { almostEqual } from "./scalar";
import { Mat2 } from "./types";

export const mat2 = (m00 = 0, m01 = 0, m10 = 0, m11 = 0): Mat2 => [
  m00,
  m01,
  m10,
  m11,
];

export const mat2Clone = (m: Mat2): Mat2 => {
  return mat2(m[0], m[1], m[2], m[3]);
};

export const mat2Identity = (): Mat2 => {
  return mat2(1, 0, 0, 1);
};

export const mat2Determinant = (m: Mat2): number => {
  return m[0] * m[3] - m[1] * m[2];
};

export const mat2Transpose = (m: Mat2): Mat2 => {
  const [m00, m01, m10, m11] = m;

  return mat2(m00, m10, m01, m11);
};

export const mat2Invert = (m: Mat2): Mat2 | null => {
  const [m00, m01, m10, m11] = m;
  const d = mat2Determinant(m);

  if (almostEqual(d, 0)) {
    return null;
  }

  return mat2(m11 / d, -m01 / d, -m10 / d, m00 / d);
};

export const mat2Add = (m1: Mat2, m2: Mat2): Mat2 => {
  return mat2(m1[0] + m2[0], m1[1] + m2[1], m1[2] + m2[2], m1[3] + m2[3]);
};

export const mat2Sub = (m1: Mat2, m2: Mat2): Mat2 => {
  return mat2(m1[0] - m2[0], m1[1] - m2[1], m1[2] - m2[2], m1[3] - m2[3]);
};

const mat2Mult2 = (a: Mat2, b: Mat2): Mat2 => {
  const [a00, a01, a10, a11] = a;
  const [b00, b01, b10, b11] = b;

  return mat2(
    a00 * b00 + a10 * b01,
    a01 * b00 + a11 * b01,
    a00 * b10 + a10 * b11,
    a01 * b10 + a11 * b11
  );
};

export const mat2Mult = (...ms: Mat2[]): Mat2 => {
  if (ms.length === 2) {
    return mat2Mult2(ms[0], ms[1]);
  }

  if (ms.length === 0) {
    return mat2Identity();
  }

  return ms.reduce((acc, m) => mat2Mult2(acc, m));
};

export const mat2Scale = (scale: number, m: Mat2 = mat2Identity()): Mat2 => {
  return mat2(m[0] * scale, m[1] * scale, m[2] * scale, m[3] * scale);
};

export const mat2Rotate = (angle: number, m: Mat2 = mat2Identity()): Mat2 => {
  const s = Math.sin(angle);
  const c = Math.cos(angle);

  return mat2(
    m[0] * c + m[2] * s,
    m[1] * c + m[3] * s,
    m[2] * c - m[0] * s,
    m[3] * c - m[1] * s
  );
};

export const mat2Equal = (m1: Mat2, m2: Mat2): boolean =>
  m1[0] === m2[0] && m1[1] === m2[1] && m1[2] === m2[2] && m1[3] === m2[3];

export const mat2AlmostEqual = (m1: Mat2, m2: Mat2): boolean =>
  almostEqual(m1[0], m2[0]) &&
  almostEqual(m1[1], m2[1]) &&
  almostEqual(m1[2], m2[2]) &&
  almostEqual(m1[3], m2[3]);
