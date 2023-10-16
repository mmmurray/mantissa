import { EPSILON_SQUARED } from "./constants";
import { clamp } from "./scalar";
import { Mat3, Vec3 } from "./types";

export const vec3 = (x = 0, y = 0, z = 0): Vec3 => [x, y, z];

export const vec3Clone = (v: Vec3): Vec3 => {
  return vec3(v[0], v[1], v[2]);
};

export const vec3Identity = (): Vec3 => {
  return vec3(1, 0, 0);
};

export const vec3Zero = (): Vec3 => {
  return vec3(0, 0, 0);
};

export const vec3Unit = (): Vec3 => {
  return vec3(1, 1, 1);
};

export const vec3Length = ([x, y, z]: Vec3): number =>
  Math.sqrt(x * x + y * y + z * z);

export const vec3LengthSquared = ([x, y, z]: Vec3): number =>
  x * x + y * y + z * z;

export const vec3Normalize = (v: Vec3): Vec3 => {
  const length = vec3Length(v);

  return vec3(v[0] / length, v[1] / length, v[2] / length);
};

export const vec3Negate = (v: Vec3): Vec3 => {
  return vec3(-v[0], -v[1], -v[2]);
};

export const vec3Invert = (v: Vec3): Vec3 => {
  return vec3(1 / v[0], 1 / v[1], 1 / v[2]);
};

export const vec3Floor = (v: Vec3): Vec3 => {
  return vec3(Math.floor(v[0]), Math.floor(v[1]), Math.floor(v[2]));
};

export const vec3Ceil = (v: Vec3): Vec3 => {
  return vec3(Math.ceil(v[0]), Math.ceil(v[1]), Math.ceil(v[2]));
};

export const vec3Round = (v: Vec3): Vec3 => {
  return vec3(Math.round(v[0]), Math.round(v[1]), Math.round(v[2]));
};

export const vec3Clamp = (
  v: Vec3,
  min: Vec3 = vec3(),
  max: Vec3 = vec3Unit()
): Vec3 => {
  return vec3(
    clamp(v[0], min[0], max[0]),
    clamp(v[1], min[1], max[1]),
    clamp(v[2], min[2], max[2])
  );
};

export const vec3Scale = (
  scale: number | Vec3,
  v: Vec3 = vec3Identity()
): Vec3 => {
  if (typeof scale === "number") {
    return vec3(v[0] * scale, v[1] * scale, v[2] * scale);
  }

  return vec3(v[0] * scale[0], v[1] * scale[1], v[2] * scale[2]);
};

export const vec3Add = (v1: Vec3, v2: Vec3): Vec3 => {
  return vec3(v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]);
};

export const vec3Sub = (v1: Vec3, v2: Vec3): Vec3 => {
  return vec3(v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]);
};

export const vec3Mult = (v1: Vec3, v2: Vec3): Vec3 => {
  return vec3(v1[0] * v2[0], v1[1] * v2[1], v1[2] * v2[2]);
};

export const vec3Div = (v1: Vec3, v2: Vec3): Vec3 => {
  return vec3(v1[0] / v2[0], v1[1] / v2[1], v1[2] / v2[2]);
};

export const vec3Min = (v1: Vec3, v2: Vec3): Vec3 => {
  return vec3(
    Math.min(v1[0], v2[0]),
    Math.min(v1[1], v2[1]),
    Math.min(v1[2], v2[2])
  );
};

export const vec3Max = (v1: Vec3, v2: Vec3): Vec3 => {
  return vec3(
    Math.max(v1[0], v2[0]),
    Math.max(v1[1], v2[1]),
    Math.max(v1[2], v2[2])
  );
};

export const vec3Dot = ([x1, y1, z1]: Vec3, [x2, y2, z2]: Vec3): number =>
  x1 * x2 + y1 * y2 + z1 * z2;

export const vec3Cross = ([x1, y1, z1]: Vec3, [x2, y2, z2]: Vec3): Vec3 => {
  return vec3(y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2);
};

export const vec3Angle = (v1: Vec3, v2: Vec3): number =>
  Math.acos(vec3Dot(v1, v2));

export const vec3Distance = (v1: Vec3, v2: Vec3): number =>
  vec3Length(vec3Sub(v2, v1));

export const vec3DistanceSquared = (v1: Vec3, v2: Vec3): number =>
  vec3LengthSquared(vec3Sub(v2, v1));

export const vec3ManhattanDistance = (v1: Vec3, v2: Vec3): number => {
  const [dx, dy, dz] = vec3Sub(v1, v2);
  return Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
};

export const vec3Equal = ([x1, y1, z1]: Vec3, [x2, y2, z2]: Vec3): boolean =>
  x1 === x2 && y1 === y2 && z1 === z2;

export const vec3AlmostEqual = (v1: Vec3, v2: Vec3): boolean =>
  vec3DistanceSquared(v1, v2) < EPSILON_SQUARED;

export const vec3Transform = (v: Vec3, m: Mat3): Vec3 => {
  const [x, y, z] = v;
  const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;

  return vec3(
    m00 * x + m10 * y + m20 * z,
    m01 * x + m11 * y + m21 * z,
    m02 * x + m12 * y + m22 * z
  );
};
