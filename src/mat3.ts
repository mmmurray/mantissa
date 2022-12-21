import { almostEqual } from './scalar';
import { Mat3, Vec2, Vec3 } from './types';

export const mat3 = (
  m00 = 0,
  m01 = 0,
  m02 = 0,
  m10 = 0,
  m11 = 0,
  m12 = 0,
  m20 = 0,
  m21 = 0,
  m22 = 0,
): Mat3 => [m00, m01, m02, m10, m11, m12, m20, m21, m22];

export const mat3Clone = (m: Mat3): Mat3 => {
  return mat3(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8]);
};

export const mat3Identity = (): Mat3 => {
  return mat3(1, 0, 0, 0, 1, 0, 0, 0, 1);
};

export const mat3Determinant = (m: Mat3): number => {
  const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;

  return (
    m00 * m11 * m22 +
    m10 * m21 * m02 +
    m20 * m01 * m12 -
    m20 * m11 * m02 -
    m00 * m21 * m12 -
    m10 * m01 * m22
  );
};

export const mat3Transpose = (m: Mat3): Mat3 => {
  const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;

  return mat3(m00, m10, m20, m01, m11, m21, m02, m12, m22);
};

export const mat3Invert = (m: Mat3): Mat3 | null => {
  const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;
  const d = mat3Determinant(m);

  if (almostEqual(d, 0)) {
    return null;
  }

  return mat3(
    (m22 * m11 - m12 * m21) / d,
    (m02 * m21 - m22 * m01) / d,
    (m12 * m01 - m02 * m11) / d,
    (m12 * m20 - m22 * m10) / d,
    (m22 * m00 - m02 * m20) / d,
    (m02 * m10 - m12 * m00) / d,
    (m21 * m10 - m11 * m20) / d,
    (m01 * m20 - m21 * m00) / d,
    (m11 * m00 - m01 * m10) / d,
  );
};

export const mat3Add = (m1: Mat3, m2: Mat3): Mat3 => {
  return mat3(
    m1[0] + m2[0],
    m1[1] + m2[1],
    m1[2] + m2[2],
    m1[3] + m2[3],
    m1[4] + m2[4],
    m1[5] + m2[5],
    m1[6] + m2[6],
    m1[7] + m2[7],
    m1[8] + m2[8],
  );
};

export const mat3Sub = (m1: Mat3, m2: Mat3): Mat3 => {
  return mat3(
    m1[0] - m2[0],
    m1[1] - m2[1],
    m1[2] - m2[2],
    m1[3] - m2[3],
    m1[4] - m2[4],
    m1[5] - m2[5],
    m1[6] - m2[6],
    m1[7] - m2[7],
    m1[8] - m2[8],
  );
};

const mat3Mult2 = (a: Mat3, b: Mat3): Mat3 => {
  const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = a;
  const [b00, b01, b02, b10, b11, b12, b20, b21, b22] = b;

  return mat3(
    a00 * b00 + a10 * b01 + a20 * b02,
    a01 * b00 + a11 * b01 + a21 * b02,
    a02 * b00 + a12 * b01 + a22 * b02,
    a00 * b10 + a10 * b11 + a20 * b12,
    a01 * b10 + a11 * b11 + a21 * b12,
    a02 * b10 + a12 * b11 + a22 * b12,
    a00 * b20 + a10 * b21 + a20 * b22,
    a01 * b20 + a11 * b21 + a21 * b22,
    a02 * b20 + a12 * b21 + a22 * b22,
  );
};

export const mat3Mult = (...ms: Mat3[]): Mat3 => {
  if (ms.length === 2) {
    return mat3Mult2(ms[0], ms[1]);
  }

  if (ms.length === 0) {
    return mat3Identity();
  }

  return ms.reduce((acc, m) => mat3Mult2(acc, m));
};

export const mat3Scale = (
  scale: number | Vec2 | Vec3,
  m: Mat3 = mat3Identity(),
): Mat3 => {
  const [sx, sy, sz] =
    typeof scale === 'number'
      ? [scale, scale, scale]
      : scale.length === 2
      ? [scale[0], scale[1], 1]
      : scale;

  return mat3(
    m[0] * sx,
    m[1] * sx,
    m[2] * sx,
    m[3] * sy,
    m[4] * sy,
    m[5] * sy,
    m[6] * sz,
    m[7] * sz,
    m[8] * sz,
  );
};

export const mat3Equal = (m1: Mat3, m2: Mat3): boolean =>
  m1[0] === m2[0] &&
  m1[1] === m2[1] &&
  m1[2] === m2[2] &&
  m1[3] === m2[3] &&
  m1[4] === m2[4] &&
  m1[5] === m2[5] &&
  m1[6] === m2[6] &&
  m1[7] === m2[7] &&
  m1[8] === m2[8];

export const mat3AlmostEqual = (m1: Mat3, m2: Mat3): boolean =>
  almostEqual(m1[0], m2[0]) &&
  almostEqual(m1[1], m2[1]) &&
  almostEqual(m1[2], m2[2]) &&
  almostEqual(m1[3], m2[3]) &&
  almostEqual(m1[4], m2[4]) &&
  almostEqual(m1[5], m2[5]) &&
  almostEqual(m1[6], m2[6]) &&
  almostEqual(m1[7], m2[7]) &&
  almostEqual(m1[8], m2[8]);

export const mat3Projection = (size: Vec2): Mat3 => {
  return mat3(2 / size[0], 0, 0, 0, -2 / size[1], 0, -1, 1, 1);
};

export const mat3Translation = ([x, y]: Vec2): Mat3 => {
  return mat3(1, 0, 0, 0, 1, 0, x, y, 1);
};

export const mat3Scaling = (scale: number | Vec2 | Vec3): Mat3 => {
  const [sx, sy, sz] =
    typeof scale === 'number'
      ? [scale, scale, scale]
      : scale.length === 2
      ? [scale[0], scale[1], 1]
      : scale;

  return mat3(sx, 0, 0, 0, sy, 0, 0, 0, sz);
};

export const mat3Rotation = (angle: number): Mat3 => {
  const s = Math.sin(angle);
  const c = Math.cos(angle);

  return mat3(c, s, 0, -s, c, 0, 0, 0, 1);
};
