import { mat3Mult, mat3Rotation, mat3Translation } from "./mat3";
import {
  rangeCreate,
  rangesCombine,
  rangeSmallest,
  rangesOverlap,
} from "./range";
import { Bounds, Vec2 } from "./types";
import {
  vec2,
  vec2Add,
  vec2AlmostEqual,
  vec2Clone,
  vec2Dot,
  vec2Equal,
  vec2Normalize,
  vec2Scale,
  vec2Sub,
  vec2Transform3,
  vec2Unit,
  vec2Zero,
} from "./vec2";

export const boundsCreate = (
  size: Vec2 = vec2(),
  position: Vec2 = vec2(),
  rotation: number = 0
): Bounds => ({
  size,
  position,
  rotation,
});

export const boundsClone = (r: Bounds): Bounds => {
  return boundsCreate(vec2Clone(r.size), vec2Clone(r.position), r.rotation);
};

export const boundsUnit = (): Bounds => {
  return boundsCreate(vec2Unit(), vec2Zero(), 0);
};

export const boundsPosition = (r: Bounds): Vec2 => r.position;

export const boundsSize = (r: Bounds): Vec2 => r.size;

export const boundsRotation = (r: Bounds): number => r.rotation;

export const boundsArea = ({ size }: Bounds): number => size[0] * size[1];

export const boundsPerimeter = ({ size }: Bounds): number =>
  size[0] * 4 + size[1] * 4;

export const boundsTranslate = (
  translation: Vec2,
  { position, size, rotation }: Bounds
): Bounds => {
  return boundsCreate(size, vec2Add(position, translation), rotation);
};

export const boundsScale = (
  scale: number | Vec2,
  { position, size, rotation }: Bounds
): Bounds => {
  return boundsCreate(vec2Scale(scale, size), position, rotation);
};

export const boundsRotate = (
  rotate: number,
  { position, size, rotation }: Bounds
): Bounds => {
  return boundsCreate(size, position, rotation + rotate);
};

const boundsProjectionsOverlap = (b1: Bounds, b2: Bounds): boolean => {
  const corners1 = boundsCorners(b1);
  const corners2 = boundsCorners(b2);

  const normalX = vec2Normalize(vec2Sub(corners1[1], corners1[0]));
  const normalY = vec2Normalize(vec2Sub(corners1[3], corners1[0]));

  let rangeX1 = rangeSmallest();
  let rangeY1 = rangeSmallest();
  corners1.forEach((corner) => {
    rangeX1 = rangesCombine(rangeX1, rangeCreate(vec2Dot(corner, normalX)));
    rangeY1 = rangesCombine(rangeY1, rangeCreate(vec2Dot(corner, normalY)));
  });

  let rangeX2 = rangeSmallest();
  let rangeY2 = rangeSmallest();
  corners2.forEach((corner) => {
    rangeX2 = rangesCombine(rangeX2, rangeCreate(vec2Dot(corner, normalX)));
    rangeY2 = rangesCombine(rangeY2, rangeCreate(vec2Dot(corner, normalY)));
  });

  return rangesOverlap(rangeX1, rangeX2) && rangesOverlap(rangeY1, rangeY2);
};

export const boundsIntersectingBounds = (b1: Bounds, b2: Bounds): boolean => {
  if (b1.rotation === 0 && b2.rotation === 0) {
    return (
      b1.position[0] + b1.size[0] > b2.position[0] &&
      b1.position[1] + b1.size[1] > b2.position[1] &&
      b1.position[0] < b2.position[0] + b2.size[0] &&
      b1.position[1] < b2.position[1] + b2.size[1]
    );
  }

  return boundsProjectionsOverlap(b1, b2) && boundsProjectionsOverlap(b2, b1);
};

export const boundsContainsPoint = (
  { position, size }: Bounds,
  point: Vec2
): boolean =>
  point[0] > position[0] &&
  point[0] < position[0] + size[0] &&
  point[1] > position[1] &&
  point[1] < position[1] + size[1];

export const boundsEqual = (r1: Bounds, r2: Bounds): boolean =>
  vec2Equal(r1.position, r2.position) && vec2Equal(r1.size, r2.size);

export const boundsAlmostEqual = (r1: Bounds, r2: Bounds): boolean =>
  vec2AlmostEqual(r1.position, r2.position) &&
  vec2AlmostEqual(r1.size, r2.size);

export const boundsCorners = ({
  size: [w, h],
  position: [x, y],
  rotation,
}: Bounds): [Vec2, Vec2, Vec2, Vec2] => {
  const baseCorners: [Vec2, Vec2, Vec2, Vec2] = [
    vec2(x, y),
    vec2(x + w, y),
    vec2(x + w, y + h),
    vec2(x, y + h),
  ];

  if (rotation === 0) {
    return baseCorners;
  }

  const center = vec2Add(vec2(x, y), vec2(w / 2, h / 2));

  const transform = mat3Mult(
    mat3Translation(center),
    mat3Rotation(rotation),
    mat3Translation(vec2Scale(-1, center))
  );

  return [
    vec2Transform3(baseCorners[0], transform),
    vec2Transform3(baseCorners[1], transform),
    vec2Transform3(baseCorners[2], transform),
    vec2Transform3(baseCorners[3], transform),
  ];
};

export const boundsCanonical = ({
  size: [w, h],
  position: [x, y],
  rotation,
}: Bounds): Bounds => {
  const size = vec2();
  const position = vec2();

  if (w < 0) {
    size[0] = -w;
    position[0] = x + w;
  } else {
    size[0] = w;
    position[0] = x;
  }

  if (h < 0) {
    size[1] = -h;
    position[1] = y + h;
  } else {
    size[1] = h;
    position[1] = y;
  }

  return boundsCreate(size, position, rotation);
};

export const boundsCenter = (b: Bounds): Vec2 => {
  return vec2(b.position[0] + b.size[0] / 2, b.position[1] + b.size[1] / 2);
};
