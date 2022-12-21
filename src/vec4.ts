import { EPSILON_SQUARED } from './constants';
import { clamp } from './scalar';
import { Vec4 } from './types';

export const vec4 = (x = 0, y = 0, z = 0, w = 0): Vec4 => [x, y, z, w];

export const vec4Clone = (v: Vec4): Vec4 => {
  return vec4(v[0], v[1], v[2], v[3]);
};

export const vec4Identity = (): Vec4 => {
  return vec4(1, 0, 0, 0);
};

export const vec4Zero = (): Vec4 => {
  return vec4(0, 0, 0, 0);
};

export const vec4Unit = (): Vec4 => {
  return vec4(1, 1, 1, 1);
};

export const vec4Length = ([x, y, z, w]: Vec4): number =>
  Math.sqrt(x * x + y * y + z * z + w * w);

export const vec4LengthSquared = ([x, y, z, w]: Vec4): number =>
  x * x + y * y + z * z + w * w;

export const vec4Normalize = (v: Vec4): Vec4 => {
  const length = vec4Length(v);

  return vec4(v[0] / length, v[1] / length, v[2] / length, v[3] / length);
};

export const vec4Negate = (v: Vec4): Vec4 => {
  return vec4(-v[0], -v[1], -v[2], -v[3]);
};

export const vec4Invert = (v: Vec4): Vec4 => {
  return vec4(1 / v[0], 1 / v[1], 1 / v[2], 1 / v[3]);
};

export const vec4Floor = (v: Vec4): Vec4 => {
  return vec4(
    Math.floor(v[0]),
    Math.floor(v[1]),
    Math.floor(v[2]),
    Math.floor(v[3]),
  );
};

export const vec4Ceil = (v: Vec4): Vec4 => {
  return vec4(
    Math.ceil(v[0]),
    Math.ceil(v[1]),
    Math.ceil(v[2]),
    Math.ceil(v[3]),
  );
};

export const vec4Round = (v: Vec4): Vec4 => {
  return vec4(
    Math.round(v[0]),
    Math.round(v[1]),
    Math.round(v[2]),
    Math.round(v[3]),
  );
};

export const vec4Clamp = (
  v: Vec4,
  min: Vec4 = vec4(),
  max: Vec4 = vec4Unit(),
): Vec4 => {
  return vec4(
    clamp(v[0], min[0], max[0]),
    clamp(v[1], min[1], max[1]),
    clamp(v[2], min[2], max[2]),
    clamp(v[3], min[3], max[3]),
  );
};

export const vec4Scale = (
  scale: number | Vec4,
  v: Vec4 = vec4Identity(),
): Vec4 => {
  if (typeof scale === 'number') {
    return vec4(v[0] * scale, v[1] * scale, v[2] * scale, v[3] * scale);
  }

  return vec4(
    v[0] * scale[0],
    v[1] * scale[1],
    v[2] * scale[2],
    v[3] * scale[3],
  );
};

export const vec4Add = (v1: Vec4, v2: Vec4): Vec4 => {
  return vec4(v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2], v1[3] + v2[3]);
};

export const vec4Sub = (v1: Vec4, v2: Vec4): Vec4 => {
  return vec4(v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2], v1[3] - v2[3]);
};

export const vec4Mult = (v1: Vec4, v2: Vec4): Vec4 => {
  return vec4(v1[0] * v2[0], v1[1] * v2[1], v1[2] * v2[2], v1[3] * v2[3]);
};

export const vec4Div = (v1: Vec4, v2: Vec4): Vec4 => {
  return vec4(v1[0] / v2[0], v1[1] / v2[1], v1[2] / v2[2], v1[3] / v2[3]);
};

export const vec4Min = (v1: Vec4, v2: Vec4): Vec4 => {
  return vec4(
    Math.min(v1[0], v2[0]),
    Math.min(v1[1], v2[1]),
    Math.min(v1[2], v2[2]),
    Math.min(v1[3], v2[3]),
  );
};

export const vec4Max = (v1: Vec4, v2: Vec4): Vec4 => {
  return vec4(
    Math.max(v1[0], v2[0]),
    Math.max(v1[1], v2[1]),
    Math.max(v1[2], v2[2]),
    Math.max(v1[3], v2[3]),
  );
};

export const vec4Dot = (
  [x1, y1, z1, w1]: Vec4,
  [x2, y2, z2, w2]: Vec4,
): number => x1 * x2 + y1 * y2 + z1 * z2 + w1 * w2;

export const vec4Angle = (v1: Vec4, v2: Vec4): number =>
  Math.acos(vec4Dot(v1, v2));

export const vec4Distance = (v1: Vec4, v2: Vec4): number =>
  vec4Length(vec4Sub(v2, v1));

export const vec4DistanceSquared = (v1: Vec4, v2: Vec4): number =>
  vec4LengthSquared(vec4Sub(v2, v1));

export const vec4ManhattanDistance = (v1: Vec4, v2: Vec4): number => {
  const [dx, dy, dz, dw] = vec4Sub(v1, v2);
  return Math.abs(dx) + Math.abs(dy) + Math.abs(dz) + Math.abs(dw);
};

export const vec4Equal = (
  [x1, y1, z1, w1]: Vec4,
  [x2, y2, z2, w2]: Vec4,
): boolean => x1 === x2 && y1 === y2 && z1 === z2 && w1 === w2;

export const vec4AlmostEqual = (v1: Vec4, v2: Vec4): boolean =>
  vec4DistanceSquared(v1, v2) < EPSILON_SQUARED;
