import { almostEqual } from './scalar';
import { Mat4 } from './types';

export const mat4 = (
  m00 = 0,
  m01 = 0,
  m02 = 0,
  m03 = 0,
  m10 = 0,
  m11 = 0,
  m12 = 0,
  m13 = 0,
  m20 = 0,
  m21 = 0,
  m22 = 0,
  m23 = 0,
  m30 = 0,
  m31 = 0,
  m32 = 0,
  m33 = 0,
): Mat4 => [
  m00,
  m01,
  m02,
  m03,
  m10,
  m11,
  m12,
  m13,
  m20,
  m21,
  m22,
  m23,
  m30,
  m31,
  m32,
  m33,
];

export const mat4Clone = (m: Mat4): Mat4 => {
  return mat4(
    m[0],
    m[1],
    m[2],
    m[3],
    m[4],
    m[5],
    m[6],
    m[7],
    m[8],
    m[9],
    m[10],
    m[11],
    m[12],
    m[13],
    m[14],
    m[15],
  );
};

export const mat4Identity = (): Mat4 => {
  return mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
};

export const mat4Determinant = (m: Mat4): number => {
  const [
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
  ] = m;

  return (
    (m00 * m11 - m01 * m10) * (m22 * m33 - m23 * m32) -
    (m00 * m12 - m02 * m10) * (m21 * m33 - m23 * m31) +
    (m00 * m13 - m03 * m10) * (m21 * m32 - m22 * m31) +
    (m01 * m12 - m02 * m11) * (m20 * m33 - m23 * m30) -
    (m01 * m13 - m03 * m11) * (m20 * m32 - m22 * m30) +
    (m02 * m13 - m03 * m12) * (m20 * m31 - m21 * m30)
  );
};

export const mat4Transpose = (m: Mat4): Mat4 => {
  const [
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
  ] = m;

  return mat4(
    m00,
    m10,
    m20,
    m30,
    m01,
    m11,
    m21,
    m31,
    m02,
    m12,
    m22,
    m32,
    m03,
    m13,
    m23,
    m33,
  );
};

export const mat4Invert = (m: Mat4): Mat4 | null => {
  const [
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
  ] = m;

  const d00 = m00 * m11 - m01 * m10;
  const d01 = m00 * m12 - m02 * m10;
  const d02 = m00 * m13 - m03 * m10;
  const d03 = m01 * m12 - m02 * m11;
  const d04 = m01 * m13 - m03 * m11;
  const d05 = m02 * m13 - m03 * m12;
  const d06 = m20 * m31 - m21 * m30;
  const d07 = m20 * m32 - m22 * m30;
  const d08 = m20 * m33 - m23 * m30;
  const d09 = m21 * m32 - m22 * m31;
  const d10 = m21 * m33 - m23 * m31;
  const d11 = m22 * m33 - m23 * m32;

  const d =
    d00 * d11 - d01 * d10 + d02 * d09 + d03 * d08 - d04 * d07 + d05 * d06;

  if (almostEqual(d, 0)) {
    return null;
  }

  return mat4(
    (m11 * d11 - m12 * d10 + m13 * d09) / d,
    (m02 * d10 - m01 * d11 - m03 * d09) / d,
    (m31 * d05 - m32 * d04 + m33 * d03) / d,
    (m22 * d04 - m21 * d05 - m23 * d03) / d,
    (m12 * d08 - m10 * d11 - m13 * d07) / d,
    (m00 * d11 - m02 * d08 + m03 * d07) / d,
    (m32 * d02 - m30 * d05 - m33 * d01) / d,
    (m20 * d05 - m22 * d02 + m23 * d01) / d,
    (m10 * d10 - m11 * d08 + m13 * d06) / d,
    (m01 * d08 - m00 * d10 - m03 * d06) / d,
    (m30 * d04 - m31 * d02 + m33 * d00) / d,
    (m21 * d02 - m20 * d04 - m23 * d00) / d,
    (m11 * d07 - m10 * d09 - m12 * d06) / d,
    (m00 * d09 - m01 * d07 + m02 * d06) / d,
    (m31 * d01 - m30 * d03 - m32 * d00) / d,
    (m20 * d03 - m21 * d01 + m22 * d00) / d,
  );
};

export const mat4Add = (m1: Mat4, m2: Mat4): Mat4 => {
  return mat4(
    m1[0] + m2[0],
    m1[1] + m2[1],
    m1[2] + m2[2],
    m1[3] + m2[3],
    m1[4] + m2[4],
    m1[5] + m2[5],
    m1[6] + m2[6],
    m1[7] + m2[7],
    m1[8] + m2[8],
    m1[9] + m2[9],
    m1[10] + m2[10],
    m1[11] + m2[11],
    m1[12] + m2[12],
    m1[13] + m2[13],
    m1[14] + m2[14],
    m1[15] + m2[15],
  );
};

export const mat4Sub = (m1: Mat4, m2: Mat4): Mat4 => {
  return mat4(
    m1[0] - m2[0],
    m1[1] - m2[1],
    m1[2] - m2[2],
    m1[3] - m2[3],
    m1[4] - m2[4],
    m1[5] - m2[5],
    m1[6] - m2[6],
    m1[7] - m2[7],
    m1[8] - m2[8],
    m1[9] - m2[9],
    m1[10] - m2[10],
    m1[11] - m2[11],
    m1[12] - m2[12],
    m1[13] - m2[13],
    m1[14] - m2[14],
    m1[15] - m2[15],
  );
};

const mat4Mult2 = (a: Mat4, b: Mat4): Mat4 => {
  const [
    a00,
    a01,
    a02,
    a03,
    a10,
    a11,
    a12,
    a13,
    a20,
    a21,
    a22,
    a23,
    a30,
    a31,
    a32,
    a33,
  ] = a;
  const [
    b00,
    b01,
    b02,
    b03,
    b10,
    b11,
    b12,
    b13,
    b20,
    b21,
    b22,
    b23,
    b30,
    b31,
    b32,
    b33,
  ] = b;

  return mat4(
    a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03,
    a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03,
    a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03,
    a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03,
    a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13,
    a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13,
    a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13,
    a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13,
    a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23,
    a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23,
    a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23,
    a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23,
    a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33,
    a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33,
    a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33,
    a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33,
  );
};

export const mat4Mult = (...ms: Mat4[]): Mat4 => {
  if (ms.length === 2) {
    return mat4Mult2(ms[0], ms[1]);
  }

  if (ms.length === 0) {
    return mat4Identity();
  }

  return ms.reduce((acc, m) => mat4Mult2(acc, m));
};

export const mat4Scale = (scale: number, m: Mat4 = mat4Identity()): Mat4 => {
  return mat4(
    m[0] * scale,
    m[1] * scale,
    m[2] * scale,
    m[3] * scale,
    m[4] * scale,
    m[5] * scale,
    m[6] * scale,
    m[7] * scale,
    m[8] * scale,
    m[9] * scale,
    m[10] * scale,
    m[11] * scale,
    m[12] * scale,
    m[13] * scale,
    m[14] * scale,
    m[15] * scale,
  );
};

export const mat4Equal = (m1: Mat4, m2: Mat4): boolean =>
  m1[0] === m2[0] &&
  m1[1] === m2[1] &&
  m1[2] === m2[2] &&
  m1[3] === m2[3] &&
  m1[4] === m2[4] &&
  m1[5] === m2[5] &&
  m1[6] === m2[6] &&
  m1[7] === m2[7] &&
  m1[8] === m2[8] &&
  m1[9] === m2[9] &&
  m1[10] === m2[10] &&
  m1[11] === m2[11] &&
  m1[12] === m2[12] &&
  m1[13] === m2[13] &&
  m1[14] === m2[14] &&
  m1[15] === m2[15];

export const mat4AlmostEqual = (m1: Mat4, m2: Mat4): boolean =>
  almostEqual(m1[0], m2[0]) &&
  almostEqual(m1[1], m2[1]) &&
  almostEqual(m1[2], m2[2]) &&
  almostEqual(m1[3], m2[3]) &&
  almostEqual(m1[4], m2[4]) &&
  almostEqual(m1[5], m2[5]) &&
  almostEqual(m1[6], m2[6]) &&
  almostEqual(m1[7], m2[7]) &&
  almostEqual(m1[8], m2[8]) &&
  almostEqual(m1[9], m2[9]) &&
  almostEqual(m1[10], m2[10]) &&
  almostEqual(m1[11], m2[11]) &&
  almostEqual(m1[12], m2[12]) &&
  almostEqual(m1[13], m2[13]) &&
  almostEqual(m1[14], m2[14]) &&
  almostEqual(m1[15], m2[15]);
