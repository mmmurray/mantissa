import {
  mat2Rotate,
  mat2Scale,
  mat3Rotation,
  mat3Scaling,
  Vec2,
  vec2,
  vec2Add,
  vec2AlmostEqual,
  vec2Angle,
  vec2Ceil,
  vec2Clamp,
  vec2Clone,
  vec2Cross,
  vec2Distance,
  vec2DistanceSquared,
  vec2Div,
  vec2Dot,
  vec2Equal,
  vec2Floor,
  vec2Identity,
  vec2Invert,
  vec2Length,
  vec2LengthSquared,
  vec2Lerp,
  vec2ManhattanDistance,
  vec2Max,
  vec2Min,
  vec2Mult,
  vec2Negate,
  vec2Normalize,
  vec2Rotate,
  vec2Round,
  vec2Scale,
  vec2Sub,
  vec2Transform2,
  vec2Transform3,
  vec2Unit,
  vec2Zero,
} from "..";

const expectToAlmostEqualVec2 = (target: Vec2, expected: Vec2) => {
  expect(vec2AlmostEqual(target, expected)).toEqual(true);
};

test("vec2", () => {
  expect(vec2()).toEqual(vec2(0, 0));
  expect(vec2(1)).toEqual(vec2(1, 0));
  expect(vec2(1, 2)).toEqual(vec2(1, 2));
  expect(vec2(-3, -4)).toEqual(vec2(-3, -4));
});

test("vec2Clone", () => {
  expect(vec2Clone(vec2(3, 4))).toEqual(vec2(3, 4));
});

test("vec2Identity", () => {
  expect(vec2Identity()).toEqual(vec2(1, 0));
});

test("vec2Zero", () => {
  expect(vec2Zero()).toEqual(vec2(0, 0));
});

test("vec2Unit", () => {
  expect(vec2Unit()).toEqual(vec2(1, 1));
});

test("vec2Length", () => {
  expect(vec2Length(vec2(0, 0))).toEqual(0);
  expect(vec2Length(vec2(1, 1))).toEqual(Math.SQRT2);
  expect(vec2Length(vec2(3, 4))).toEqual(5);
  expect(vec2Length(vec2(-3, -4))).toEqual(5);
});

test("vec2LengthSquared", () => {
  expect(vec2LengthSquared(vec2(0, 0))).toEqual(0);
  expect(vec2LengthSquared(vec2(1, 1))).toEqual(2);
  expect(vec2LengthSquared(vec2(3, 4))).toEqual(25);
  expect(vec2LengthSquared(vec2(-3, -4))).toEqual(25);
});

test("vec2Normalize", () => {
  expect(vec2Normalize(vec2(1, 0))).toEqual(vec2(1, 0));
  expect(vec2Normalize(vec2(-1, 0))).toEqual(vec2(-1, 0));
  expect(vec2Normalize(vec2(0, 1))).toEqual(vec2(0, 1));
  expect(vec2Normalize(vec2(0, -1))).toEqual(vec2(0, -1));
  expect(vec2Normalize(vec2(3, 4))).toEqual(vec2(0.6, 0.8));
});

test("vec2Negate", () => {
  expect(vec2Negate(vec2(0, 0))).toEqual(vec2(-0, -0));
  expect(vec2Negate(vec2(1, 1))).toEqual(vec2(-1, -1));
  expect(vec2Negate(vec2(-1, -1))).toEqual(vec2(1, 1));
  expect(vec2Negate(vec2(1, -1))).toEqual(vec2(-1, 1));
  expect(vec2Negate(vec2(-2, 2))).toEqual(vec2(2, -2));
});

test("vec2Invert", () => {
  expect(vec2Invert(vec2(1, 1))).toEqual(vec2(1, 1));
  expect(vec2Invert(vec2(-1, -1))).toEqual(vec2(-1, -1));
  expect(vec2Invert(vec2(2, 4))).toEqual(vec2(0.5, 0.25));
  expect(vec2Invert(vec2(-4, -2))).toEqual(vec2(-0.25, -0.5));
});

test("vec2Floor", () => {
  expect(vec2Floor(vec2(-1.8, -1.9))).toEqual(vec2(-2, -2));
  expect(vec2Floor(vec2(-1.1, -1.2))).toEqual(vec2(-2, -2));
  expect(vec2Floor(vec2(-0.8, -0.9))).toEqual(vec2(-1, -1));
  expect(vec2Floor(vec2(-0.1, -0.2))).toEqual(vec2(-1, -1));
  expect(vec2Floor(vec2(-0, -0))).toEqual(vec2(-0, -0));
  expect(vec2Floor(vec2(0, 0))).toEqual(vec2(0, 0));
  expect(vec2Floor(vec2(0.1, 0.2))).toEqual(vec2(0, 0));
  expect(vec2Floor(vec2(0.8, 0.9))).toEqual(vec2(0, 0));
  expect(vec2Floor(vec2(1.1, 1.2))).toEqual(vec2(1, 1));
  expect(vec2Floor(vec2(1.8, 1.9))).toEqual(vec2(1, 1));
});

test("vec2Ceil", () => {
  expect(vec2Ceil(vec2(-1.8, -1.9))).toEqual(vec2(-1, -1));
  expect(vec2Ceil(vec2(-1.1, -1.2))).toEqual(vec2(-1, -1));
  expect(vec2Ceil(vec2(-0.8, -0.9))).toEqual(vec2(-0, -0));
  expect(vec2Ceil(vec2(-0.1, -0.2))).toEqual(vec2(-0, -0));
  expect(vec2Ceil(vec2(-0, -0))).toEqual(vec2(-0, -0));
  expect(vec2Ceil(vec2(0, 0))).toEqual(vec2(0, 0));
  expect(vec2Ceil(vec2(0.1, 0.2))).toEqual(vec2(1, 1));
  expect(vec2Ceil(vec2(0.8, 0.9))).toEqual(vec2(1, 1));
  expect(vec2Ceil(vec2(1.1, 1.2))).toEqual(vec2(2, 2));
  expect(vec2Ceil(vec2(1.8, 1.9))).toEqual(vec2(2, 2));
});

test("vec2Round", () => {
  expect(vec2Round(vec2(-1.8, -1.9))).toEqual(vec2(-2, -2));
  expect(vec2Round(vec2(-1.1, -1.2))).toEqual(vec2(-1, -1));
  expect(vec2Round(vec2(-0.8, -0.9))).toEqual(vec2(-1, -1));
  expect(vec2Round(vec2(-0.1, -0.2))).toEqual(vec2(-0, -0));
  expect(vec2Round(vec2(-0, -0))).toEqual(vec2(-0, -0));
  expect(vec2Round(vec2(0, 0))).toEqual(vec2(0, 0));
  expect(vec2Round(vec2(0.1, 0.2))).toEqual(vec2(0, 0));
  expect(vec2Round(vec2(0.8, 0.9))).toEqual(vec2(1, 1));
  expect(vec2Round(vec2(1.1, 1.2))).toEqual(vec2(1, 1));
  expect(vec2Round(vec2(1.8, 1.9))).toEqual(vec2(2, 2));
});

test("vec2Clamp", () => {
  expect(vec2Clamp(vec2(0, 0))).toEqual(vec2(0, 0));
  expect(vec2Clamp(vec2(-2, -3))).toEqual(vec2(0, 0));
  expect(vec2Clamp(vec2(3, 4))).toEqual(vec2(1, 1));
  expect(vec2Clamp(vec2(-2, -3), vec2(-1, -2))).toEqual(vec2(-1, -2));
  expect(vec2Clamp(vec2(3, 4), vec2(-1, -2))).toEqual(vec2(1, 1));
  expect(vec2Clamp(vec2(3, 4), vec2(-1, -2), vec2(2, 3))).toEqual(vec2(2, 3));
});

test("vec2Scale", () => {
  expect(vec2Scale(2, vec2(1, 2))).toEqual(vec2(2, 4));
  expect(vec2Scale(0, vec2(1, 2))).toEqual(vec2(0, 0));
  expect(vec2Scale(-1, vec2(1, 2))).toEqual(vec2(-1, -2));
  expect(vec2Scale(4)).toEqual(vec2(4, 0));
  expect(vec2Scale(vec2(3, 4), vec2(1, 2))).toEqual(vec2(3, 8));
});

test("vec2Add", () => {
  expect(vec2Add(vec2(1, 2), vec2(3, 4))).toEqual(vec2(4, 6));
  expect(vec2Add(vec2(1, 2), vec2(-1, -2))).toEqual(vec2(0, 0));
});

test("vec2Sub", () => {
  expect(vec2Sub(vec2(1, 2), vec2(3, 4))).toEqual(vec2(-2, -2));
  expect(vec2Sub(vec2(1, 2), vec2(1, 2))).toEqual(vec2(0, 0));
});

test("vec2Mult", () => {
  expect(vec2Mult(vec2(1, 2), vec2(3, 4))).toEqual(vec2(3, 8));
  expect(vec2Mult(vec2(1, 2), vec2(-1, -2))).toEqual(vec2(-1, -4));
  expect(vec2Mult(vec2(1, 2), vec2(0, 0))).toEqual(vec2(0, 0));
});

test("vec2Div", () => {
  expect(vec2Div(vec2(1, 2), vec2(3, 4))).toEqual(vec2(1 / 3, 1 / 2));
  expect(vec2Div(vec2(1, 2), vec2(-1, -2))).toEqual(vec2(-1, -1));
  expect(vec2Div(vec2(0, 0), vec2(1, 2))).toEqual(vec2(0, 0));
});

test("vec2Min", () => {
  expect(vec2Min(vec2(1, 2), vec2(3, 4))).toEqual(vec2(1, 2));
  expect(vec2Min(vec2(3, 2), vec2(1, 4))).toEqual(vec2(1, 2));
  expect(vec2Min(vec2(1, 4), vec2(3, 2))).toEqual(vec2(1, 2));
  expect(vec2Min(vec2(1, 2), vec2(-1, -2))).toEqual(vec2(-1, -2));
  expect(vec2Min(vec2(0, 0), vec2(1, 2))).toEqual(vec2(0, 0));
});

test("vec2Max", () => {
  expect(vec2Max(vec2(1, 2), vec2(3, 4))).toEqual(vec2(3, 4));
  expect(vec2Max(vec2(3, 2), vec2(1, 4))).toEqual(vec2(3, 4));
  expect(vec2Max(vec2(1, 4), vec2(3, 2))).toEqual(vec2(3, 4));
  expect(vec2Max(vec2(1, 2), vec2(-1, -2))).toEqual(vec2(1, 2));
  expect(vec2Max(vec2(0, 0), vec2(1, 2))).toEqual(vec2(1, 2));
});

test("vec2Dot", () => {
  expect(vec2Dot(vec2(1, 2), vec2(3, 4))).toEqual(11);
  expect(vec2Dot(vec2(2, -2), vec2(4, 4))).toEqual(0);
  expect(vec2Dot(vec2(-1, 2), vec2(3, 4))).toEqual(5);
  expect(vec2Dot(vec2(1, 2), vec2(0, 0))).toEqual(0);
});

test("vec2Cross", () => {
  expect(vec2Cross(vec2(1, 2), vec2(3, 4))).toEqual(-2);
  expect(vec2Cross(vec2(2, 2), vec2(4, 4))).toEqual(0);
  expect(vec2Cross(vec2(-1, 2), vec2(3, 4))).toEqual(-10);
  expect(vec2Cross(vec2(1, 2), vec2(0, 0))).toEqual(0);
});

test("vec2Angle", () => {
  expect(vec2Angle(vec2(1, 0), vec2(1, 0))).toEqual(0);
  expect(vec2Angle(vec2(1, 0), vec2(0, 1))).toEqual(Math.PI / 2);
  expect(vec2Angle(vec2(1, 0), vec2(Math.SQRT1_2, Math.SQRT1_2))).toEqual(
    Math.PI / 4
  );
  expect(vec2Angle(vec2(1, 0), vec2(Math.SQRT1_2, -Math.SQRT1_2))).toEqual(
    -Math.PI / 4
  );
  expect(vec2Angle(vec2(1, 0), vec2(-1, 0))).toEqual(Math.PI);
});

test("vec2Distance", () => {
  expect(vec2Distance(vec2(0, 0), vec2(0, 0))).toEqual(0);
  expect(vec2Distance(vec2(0, 0), vec2(1, 0))).toEqual(1);
  expect(vec2Distance(vec2(1, 0), vec2(1, 0))).toEqual(0);
  expect(vec2Distance(vec2(1, 0), vec2(-1, 0))).toEqual(2);
  expect(vec2Distance(vec2(1, 1), vec2(2, 2))).toEqual(Math.SQRT2);
  expect(vec2Distance(vec2(1, 1), vec2(-1, -1))).toEqual(2 * Math.SQRT2);
});

test("vec2DistanceSquared", () => {
  expect(vec2DistanceSquared(vec2(0, 0), vec2(0, 0))).toEqual(0);
  expect(vec2DistanceSquared(vec2(0, 0), vec2(1, 0))).toEqual(1);
  expect(vec2DistanceSquared(vec2(1, 0), vec2(1, 0))).toEqual(0);
  expect(vec2DistanceSquared(vec2(1, 0), vec2(-1, 0))).toEqual(4);
  expect(vec2DistanceSquared(vec2(1, 1), vec2(2, 2))).toEqual(2);
  expect(vec2DistanceSquared(vec2(1, 1), vec2(-1, -1))).toEqual(8);
});

test("vec2ManhattanDistance", () => {
  expect(vec2ManhattanDistance(vec2(0, 0), vec2(1, 0))).toEqual(1);
  expect(vec2ManhattanDistance(vec2(10, -3), vec2(2, 7))).toEqual(18);
});

test("vec2Equal", () => {
  expect(vec2Equal(vec2(0, 0), vec2(0, 0))).toEqual(true);
  expect(vec2Equal(vec2(0, 0), vec2(-0, -0))).toEqual(true);
  expect(vec2Equal(vec2(1, 1), vec2(1, 1))).toEqual(true);
  expect(vec2Equal(vec2(1, 1), vec2(0, 0))).toEqual(false);
  expect(vec2Equal(vec2(0, 0), vec2(1, 0))).toEqual(false);
  expect(vec2Equal(vec2(0, 0), vec2(0, 1))).toEqual(false);
  expect(vec2Equal(vec2(0, 0), vec2(1, 1))).toEqual(false);
});

test("vec2AlmostEqual", () => {
  expect(vec2AlmostEqual(vec2(0, 0), vec2(0, 0))).toEqual(true);
  expect(vec2AlmostEqual(vec2(0, 0), vec2(1e-10, 1e-10))).toEqual(true);
  expect(vec2AlmostEqual(vec2(0, 0), vec2(-1e-10, -1e-10))).toEqual(true);
  expect(vec2AlmostEqual(vec2(1e-10, 1e-10), vec2(0, 0))).toEqual(true);
  expect(vec2AlmostEqual(vec2(-1e-10, -1e-10), vec2(0, 0))).toEqual(true);
  expect(vec2AlmostEqual(vec2(0, 0), vec2(1e-8, 0))).toEqual(false);
});

test("vec2Rotate", () => {
  expectToAlmostEqualVec2(vec2Rotate(0, vec2(1, 0)), vec2(1, 0));
  expectToAlmostEqualVec2(
    vec2Rotate(Math.PI / 4, vec2(1, 0)),
    vec2(Math.SQRT1_2, Math.SQRT1_2)
  );
  expectToAlmostEqualVec2(vec2Rotate(Math.PI / 2, vec2(1, 0)), vec2(0, 1));
  expectToAlmostEqualVec2(vec2Rotate(Math.PI, vec2(1, 0)), vec2(-1, 0));
  expectToAlmostEqualVec2(vec2Rotate(Math.PI * 1.5, vec2(1, 0)), vec2(0, -1));
  expectToAlmostEqualVec2(vec2Rotate(Math.PI * 2, vec2(1, 0)), vec2(1, 0));
  expectToAlmostEqualVec2(vec2Rotate(Math.PI * 2), vec2(1, 0));
});

test("vec2Transform2", () => {
  expectToAlmostEqualVec2(vec2Transform2(vec2(2, 3), mat2Scale(2)), vec2(4, 6));
  expectToAlmostEqualVec2(
    vec2Transform2(vec2(2, 3), mat2Rotate(Math.PI / 2)),
    vec2(-3, 2)
  );
});

test("vec2Transform3", () => {
  expectToAlmostEqualVec2(
    vec2Transform3(vec2(2, 3), mat3Scaling(vec2(3, 2))),
    vec2(6, 6)
  );
  expectToAlmostEqualVec2(
    vec2Transform3(vec2(2, 3), mat3Rotation(-Math.PI / 2)),
    vec2(3, -2)
  );
});

test("vec2Lerp", () => {
  expect(vec2Lerp(vec2(0, 0), vec2(12, 4), 0.5)).toEqual(vec2(6, 2));
  expect(vec2Lerp(vec2(3, 2), vec2(-1, -8), 0.1)).toEqual(vec2(2.6, 1));
});
