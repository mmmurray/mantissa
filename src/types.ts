export type Vec2 = [number, number];

export type Vec3 = [number, number, number];

export type Vec4 = [number, number, number, number];

export type Mat2 = [number, number, number, number];

export type Mat3 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

export type Mat4 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

export type Bounds = {
  size: Vec2;
  position: Vec2;
  rotation: number;
};

export type Range = {
  min: number;
  max: number;
};
