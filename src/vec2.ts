import { EPSILON_SQUARED } from './constants';
import { clamp } from './scalar';
import { Mat2, Mat3, Vec2 } from './types';
import { vec3, vec3Transform } from './vec3';

export const vec2 = (x = 0, y = 0): Vec2 => [x, y];

export const vec2Clone = (v: Vec2): Vec2 => {
  return vec2(v[0], v[1]);
};

export const vec2Identity = (): Vec2 => {
  return vec2(1, 0);
};

export const vec2Zero = (): Vec2 => {
  return vec2(0, 0);
};

export const vec2Unit = (): Vec2 => {
  return vec2(1, 1);
};

export const vec2Length = ([x, y]: Vec2): number => Math.sqrt(x * x + y * y);

export const vec2LengthSquared = ([x, y]: Vec2): number => x * x + y * y;

export const vec2Normalize = (v: Vec2): Vec2 => {
  const length = vec2Length(v);

  return vec2(v[0] / length, v[1] / length);
};

export const vec2Negate = (v: Vec2): Vec2 => {
  return vec2(-v[0], -v[1]);
};

export const vec2Invert = (v: Vec2): Vec2 => {
  return vec2(1 / v[0], 1 / v[1]);
};

export const vec2Floor = (v: Vec2): Vec2 => {
  return vec2(Math.floor(v[0]), Math.floor(v[1]));
};

export const vec2Ceil = (v: Vec2): Vec2 => {
  return vec2(Math.ceil(v[0]), Math.ceil(v[1]));
};

export const vec2Round = (v: Vec2): Vec2 => {
  return vec2(Math.round(v[0]), Math.round(v[1]));
};

export const vec2Clamp = (
  v: Vec2,
  min: Vec2 = vec2(),
  max: Vec2 = vec2Unit(),
): Vec2 => {
  return vec2(clamp(v[0], min[0], max[0]), clamp(v[1], min[1], max[1]));
};

export const vec2Scale = (
  scale: number | Vec2,
  v: Vec2 = vec2Identity(),
): Vec2 => {
  if (typeof scale === 'number') {
    return vec2(v[0] * scale, v[1] * scale);
  }

  return vec2(v[0] * scale[0], v[1] * scale[1]);
};

export const vec2Add = (v1: Vec2, v2: Vec2): Vec2 => {
  return vec2(v1[0] + v2[0], v1[1] + v2[1]);
};

export const vec2Sub = (v1: Vec2, v2: Vec2): Vec2 => {
  return vec2(v1[0] - v2[0], v1[1] - v2[1]);
};

export const vec2Mult = (v1: Vec2, v2: Vec2): Vec2 => {
  return vec2(v1[0] * v2[0], v1[1] * v2[1]);
};

export const vec2Div = (v1: Vec2, v2: Vec2): Vec2 => {
  return vec2(v1[0] / v2[0], v1[1] / v2[1]);
};

export const vec2Min = (v1: Vec2, v2: Vec2): Vec2 => {
  return vec2(Math.min(v1[0], v2[0]), Math.min(v1[1], v2[1]));
};

export const vec2Max = (v1: Vec2, v2: Vec2): Vec2 => {
  return vec2(Math.max(v1[0], v2[0]), Math.max(v1[1], v2[1]));
};

export const vec2Dot = ([x1, y1]: Vec2, [x2, y2]: Vec2): number =>
  x1 * x2 + y1 * y2;

export const vec2Cross = ([x1, y1]: Vec2, [x2, y2]: Vec2): number =>
  x1 * y2 - y1 * x2;

export const vec2Angle = ([x1, y1]: Vec2, [x2, y2]: Vec2): number =>
  Math.atan2(y2, x2) - Math.atan2(y1, x1);

export const vec2Distance = (v1: Vec2, v2: Vec2): number =>
  vec2Length(vec2Sub(v2, v1));

export const vec2DistanceSquared = (v1: Vec2, v2: Vec2): number =>
  vec2LengthSquared(vec2Sub(v2, v1));

export const vec2ManhattanDistance = (v1: Vec2, v2: Vec2): number => {
  const [dx, dy] = vec2Sub(v1, v2);

  return Math.abs(dx) + Math.abs(dy);
};

export const vec2Equal = ([x1, y1]: Vec2, [x2, y2]: Vec2): boolean =>
  x1 === x2 && y1 === y2;

export const vec2AlmostEqual = (v1: Vec2, v2: Vec2): boolean =>
  vec2DistanceSquared(v1, v2) < EPSILON_SQUARED;

export const vec2Rotate = (angle: number, [x, y]: Vec2 = vec2Identity()) => {
  const s = Math.sin(angle);
  const c = Math.cos(angle);

  return vec2(x * c - y * s, x * s + y * c);
};

export const vec2Transform2 = (v: Vec2, m: Mat2): Vec2 => {
  const [x, y] = v;
  const [m00, m01, m10, m11] = m;

  return vec2(m00 * x + m10 * y, m01 * x + m11 * y);
};

export const vec2Transform3 = (v: Vec2, m: Mat3): Vec2 => {
  const t = vec3Transform(vec3(v[0], v[1], 1), m);

  return vec2(t[0], t[1]);
};

export const vec2Lerp = (v1: Vec2, v2: Vec2, p: number): Vec2 => {
  return vec2Add(v1, vec2Scale(p, vec2Sub(v2, v1)));
};
