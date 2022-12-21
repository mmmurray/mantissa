import {
  mat3Rotation,
  mat3Scaling,
  mat3Translation,
  vec2,
  Vec3,
  vec3,
  vec3Add,
  vec3AlmostEqual,
  vec3Angle,
  vec3Ceil,
  vec3Clamp,
  vec3Clone,
  vec3Cross,
  vec3Distance,
  vec3DistanceSquared,
  vec3Div,
  vec3Dot,
  vec3Equal,
  vec3Floor,
  vec3Identity,
  vec3Invert,
  vec3Length,
  vec3LengthSquared,
  vec3ManhattanDistance,
  vec3Max,
  vec3Min,
  vec3Mult,
  vec3Negate,
  vec3Normalize,
  vec3Round,
  vec3Scale,
  vec3Sub,
  vec3Transform,
  vec3Unit,
  vec3Zero,
} from '..';

const expectToAlmostEqualVec3 = (target: Vec3, expected: Vec3) => {
  expect(vec3AlmostEqual(target, expected)).toEqual(true);
};

test('vec3', () => {
  expect(vec3()).toEqual(vec3(0, 0, 0));
  expect(vec3(1)).toEqual(vec3(1, 0, 0));
  expect(vec3(1, 2)).toEqual(vec3(1, 2, 0));
  expect(vec3(1, 2, 3)).toEqual(vec3(1, 2, 3));
  expect(vec3(-3, -4, -5)).toEqual(vec3(-3, -4, -5));
});

test('vec3Clone', () => {
  expect(vec3Clone(vec3(1, 2, 3))).toEqual(vec3(1, 2, 3));
});

test('vec3Identity', () => {
  expect(vec3Identity()).toEqual(vec3(1, 0, 0));
});

test('vec3Zero', () => {
  expect(vec3Zero()).toEqual(vec3(0, 0, 0));
});

test('vec3Unit', () => {
  expect(vec3Unit()).toEqual(vec3(1, 1, 1));
});

test('vec3Length', () => {
  expect(vec3Length(vec3(0, 0, 0))).toEqual(0);
  expect(vec3Length(vec3(1, 1, 1))).toEqual(1.7320508075688772);
  expect(vec3Length(vec3(3, 4, 5))).toEqual(7.0710678118654755);
  expect(vec3Length(vec3(-3, -4, -5))).toEqual(7.0710678118654755);
});

test('vec3LengthSquared', () => {
  expect(vec3LengthSquared(vec3(0, 0, 0))).toEqual(0);
  expect(vec3LengthSquared(vec3(1, 1, 1))).toEqual(3);
  expect(vec3LengthSquared(vec3(3, 4, 5))).toEqual(50);
  expect(vec3LengthSquared(vec3(-3, -4, -5))).toEqual(50);
});

test('vec3Normalize', () => {
  expect(vec3Normalize(vec3(1, 0, 0))).toEqual(vec3(1, 0, 0));
  expect(vec3Normalize(vec3(-1, 0, 0))).toEqual(vec3(-1, 0, 0));
  expect(vec3Normalize(vec3(0, 1, 0))).toEqual(vec3(0, 1, 0));
  expect(vec3Normalize(vec3(0, -1, 0))).toEqual(vec3(0, -1, 0));
  expect(vec3Normalize(vec3(0, 0, 1))).toEqual(vec3(0, 0, 1));
  expect(vec3Normalize(vec3(0, 0, -1))).toEqual(vec3(0, 0, -1));
  expect(vec3Normalize(vec3(3, 4, 5))).toEqual(
    vec3(0.4242640687119285, 0.565685424949238, 0.7071067811865475),
  );
});

test('vec3Negate', () => {
  expect(vec3Negate(vec3(0, 0, 0))).toEqual(vec3(-0, -0, -0));
  expect(vec3Negate(vec3(1, 1, 1))).toEqual(vec3(-1, -1, -1));
  expect(vec3Negate(vec3(-1, -1, -1))).toEqual(vec3(1, 1, 1));
  expect(vec3Negate(vec3(1, -1, 1))).toEqual(vec3(-1, 1, -1));
  expect(vec3Negate(vec3(-2, 2, -2))).toEqual(vec3(2, -2, 2));
});

test('vec3Invert', () => {
  expect(vec3Invert(vec3(1, 1, 1))).toEqual(vec3(1, 1, 1));
  expect(vec3Invert(vec3(-1, -1, -1))).toEqual(vec3(-1, -1, -1));
  expect(vec3Invert(vec3(2, 4, 8))).toEqual(vec3(0.5, 0.25, 0.125));
  expect(vec3Invert(vec3(-8, -4, -2))).toEqual(vec3(-0.125, -0.25, -0.5));
});

test('vec3Floor', () => {
  expect(vec3Floor(vec3(-1.7, -1.8, -1.9))).toEqual(vec3(-2, -2, -2));
  expect(vec3Floor(vec3(-1.1, -1.2, -1.3))).toEqual(vec3(-2, -2, -2));
  expect(vec3Floor(vec3(-0.7, -0.8, -0.9))).toEqual(vec3(-1, -1, -1));
  expect(vec3Floor(vec3(-0.1, -0.2, -0.3))).toEqual(vec3(-1, -1, -1));
  expect(vec3Floor(vec3(-0, -0, -0))).toEqual(vec3(-0, -0, -0));
  expect(vec3Floor(vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
  expect(vec3Floor(vec3(0.1, 0.2, 0.3))).toEqual(vec3(0, 0, 0));
  expect(vec3Floor(vec3(0.7, 0.8, 0.9))).toEqual(vec3(0, 0, 0));
  expect(vec3Floor(vec3(1.1, 1.2, 1.3))).toEqual(vec3(1, 1, 1));
  expect(vec3Floor(vec3(1.7, 1.8, 1.9))).toEqual(vec3(1, 1, 1));
});

test('vec3Ceil', () => {
  expect(vec3Ceil(vec3(-1.7, -1.8, -1.9))).toEqual(vec3(-1, -1, -1));
  expect(vec3Ceil(vec3(-1.1, -1.2, -1.3))).toEqual(vec3(-1, -1, -1));
  expect(vec3Ceil(vec3(-0.7, -0.8, -0.9))).toEqual(vec3(-0, -0, -0));
  expect(vec3Ceil(vec3(-0.1, -0.2, -0.3))).toEqual(vec3(-0, -0, -0));
  expect(vec3Ceil(vec3(-0, -0, -0))).toEqual(vec3(-0, -0, -0));
  expect(vec3Ceil(vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
  expect(vec3Ceil(vec3(0.1, 0.2, 0.3))).toEqual(vec3(1, 1, 1));
  expect(vec3Ceil(vec3(0.7, 0.8, 0.9))).toEqual(vec3(1, 1, 1));
  expect(vec3Ceil(vec3(1.1, 1.2, 1.3))).toEqual(vec3(2, 2, 2));
  expect(vec3Ceil(vec3(1.7, 1.8, 1.9))).toEqual(vec3(2, 2, 2));
});

test('vec3Round', () => {
  expect(vec3Round(vec3(-1.7, -1.8, -1.9))).toEqual(vec3(-2, -2, -2));
  expect(vec3Round(vec3(-1.1, -1.2, -1.3))).toEqual(vec3(-1, -1, -1));
  expect(vec3Round(vec3(-0.7, -0.8, -0.9))).toEqual(vec3(-1, -1, -1));
  expect(vec3Round(vec3(-0.1, -0.2, -0.3))).toEqual(vec3(-0, -0, -0));
  expect(vec3Round(vec3(-0, -0, -0))).toEqual(vec3(-0, -0, -0));
  expect(vec3Round(vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
  expect(vec3Round(vec3(0.1, 0.2, 0.3))).toEqual(vec3(0, 0, 0));
  expect(vec3Round(vec3(0.7, 0.8, 0.9))).toEqual(vec3(1, 1, 1));
  expect(vec3Round(vec3(1.1, 1.2, 1.3))).toEqual(vec3(1, 1, 1));
  expect(vec3Round(vec3(1.7, 1.8, 1.9))).toEqual(vec3(2, 2, 2));
});

test('vec3Clamp', () => {
  expect(vec3Clamp(vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
  expect(vec3Clamp(vec3(-2, -3, -4))).toEqual(vec3(0, 0, 0));
  expect(vec3Clamp(vec3(3, 4, 5))).toEqual(vec3(1, 1, 1));
  expect(vec3Clamp(vec3(-2, -3, -4), vec3(-1, -2, -3))).toEqual(
    vec3(-1, -2, -3),
  );
  expect(vec3Clamp(vec3(3, 4, 5), vec3(-1, -2, -3))).toEqual(vec3(1, 1, 1));
  expect(vec3Clamp(vec3(3, 4, 5), vec3(-1, -2, -3), vec3(2, 3, 4))).toEqual(
    vec3(2, 3, 4),
  );
});

test('vec3Scale', () => {
  expect(vec3Scale(2, vec3(1, 2, 3))).toEqual(vec3(2, 4, 6));
  expect(vec3Scale(0, vec3(1, 2, 3))).toEqual(vec3(0, 0, 0));
  expect(vec3Scale(-1, vec3(1, 2, 3))).toEqual(vec3(-1, -2, -3));
  expect(vec3Scale(4)).toEqual(vec3(4, 0, 0));
  expect(vec3Scale(vec3(3, 4, 5), vec3(1, 2, 3))).toEqual(vec3(3, 8, 15));
});

test('vec3Add', () => {
  expect(vec3Add(vec3(1, 2, 3), vec3(3, 4, 5))).toEqual(vec3(4, 6, 8));
  expect(vec3Add(vec3(1, 2, 3), vec3(-1, -2, -3))).toEqual(vec3(0, 0, 0));
});

test('vec3Sub', () => {
  expect(vec3Sub(vec3(1, 2, 3), vec3(3, 4, 5))).toEqual(vec3(-2, -2, -2));
  expect(vec3Sub(vec3(1, 2, 3), vec3(1, 2, 3))).toEqual(vec3(0, 0, 0));
});

test('vec3Mult', () => {
  expect(vec3Mult(vec3(1, 2, 3), vec3(3, 4, 5))).toEqual(vec3(3, 8, 15));
  expect(vec3Mult(vec3(1, 2, 3), vec3(-1, -2, -3))).toEqual(vec3(-1, -4, -9));
  expect(vec3Mult(vec3(1, 2, 3), vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
});

test('vec3Div', () => {
  expect(vec3Div(vec3(1, 2, 3), vec3(3, 4, 5))).toEqual(
    vec3(1 / 3, 1 / 2, 0.6),
  );
  expect(vec3Div(vec3(1, 2, 3), vec3(-1, -2, -3))).toEqual(vec3(-1, -1, -1));
  expect(vec3Div(vec3(0, 0, 0), vec3(1, 2, 3))).toEqual(vec3(0, 0, 0));
});

test('vec3Min', () => {
  expect(vec3Min(vec3(1, 2, 3), vec3(3, 4, 5))).toEqual(vec3(1, 2, 3));
  expect(vec3Min(vec3(3, 2, 1), vec3(1, 4, 9))).toEqual(vec3(1, 2, 1));
  expect(vec3Min(vec3(1, 4, 9), vec3(3, 2, 1))).toEqual(vec3(1, 2, 1));
  expect(vec3Min(vec3(1, 2, 3), vec3(-1, -2, -3))).toEqual(vec3(-1, -2, -3));
  expect(vec3Min(vec3(0, 0, 0), vec3(1, 2, 3))).toEqual(vec3(0, 0, 0));
});

test('vec3Max', () => {
  expect(vec3Max(vec3(1, 2, 3), vec3(3, 4, 5))).toEqual(vec3(3, 4, 5));
  expect(vec3Max(vec3(3, 2, 1), vec3(1, 4, 9))).toEqual(vec3(3, 4, 9));
  expect(vec3Max(vec3(1, 4, 9), vec3(3, 2, 1))).toEqual(vec3(3, 4, 9));
  expect(vec3Max(vec3(1, 2, 3), vec3(-1, -2, -3))).toEqual(vec3(1, 2, 3));
  expect(vec3Max(vec3(0, 0, 0), vec3(1, 2, 3))).toEqual(vec3(1, 2, 3));
});

test('vec3Dot', () => {
  expect(vec3Dot(vec3(1, 2, 3), vec3(3, 4, 5))).toEqual(26);
  expect(vec3Dot(vec3(2, -4, 2), vec3(4, 4, 4))).toEqual(0);
  expect(vec3Dot(vec3(-1, 2, -3), vec3(3, 4, 5))).toEqual(-10);
  expect(vec3Dot(vec3(1, 2, 3), vec3(0, 0, 0))).toEqual(0);
});

test('vec3Cross', () => {
  expect(vec3Cross(vec3(1, 2, 3), vec3(3, 4, 5))).toEqual(vec3(-2, 4, -2));
  expect(vec3Cross(vec3(-2, 4, 2), vec3(4, 4, 4))).toEqual(vec3(8, 16, -24));
  expect(vec3Cross(vec3(-1, 2, -3), vec3(3, 4, 5))).toEqual(vec3(22, -4, -10));
  expect(vec3Cross(vec3(1, 2, 3), vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
});

test('vec3Angle', () => {
  expect(vec3Angle(vec3(1, 0, 0), vec3(1, 0, 0))).toEqual(0);
  expect(vec3Angle(vec3(1, 0, 0), vec3(0, 1, 0))).toEqual(Math.PI / 2);
  expect(vec3Angle(vec3(1, 0, 0), vec3(0, 0, 1))).toEqual(Math.PI / 2);
  expect(
    vec3Angle(vec3(1, 0, 0), vec3(Math.SQRT1_2, Math.SQRT1_2, Math.SQRT1_2)),
  ).toEqual(Math.PI / 4);
  expect(
    vec3Angle(vec3(1, 0, 0), vec3(Math.SQRT1_2, -Math.SQRT1_2, Math.SQRT1_2)),
  ).toEqual(Math.PI / 4);
  expect(vec3Angle(vec3(1, 0, 0), vec3(-1, 0, 0))).toEqual(Math.PI);
});

test('vec3Distance', () => {
  expect(vec3Distance(vec3(0, 0, 0), vec3(0, 0, 0))).toEqual(0);
  expect(vec3Distance(vec3(0, 0, 0), vec3(1, 0, 0))).toEqual(1);
  expect(vec3Distance(vec3(1, 0, 0), vec3(1, 0, 0))).toEqual(0);
  expect(vec3Distance(vec3(1, 0, 0), vec3(-1, 0, 0))).toEqual(2);
  expect(vec3Distance(vec3(1, 1, 1), vec3(2, 2, 2))).toEqual(Math.sqrt(3));
  expect(vec3Distance(vec3(1, 1, 1), vec3(-1, -1, -1))).toEqual(Math.sqrt(12));
});

test('vec3DistanceSquared', () => {
  expect(vec3DistanceSquared(vec3(0, 0, 0), vec3(0, 0, 0))).toEqual(0);
  expect(vec3DistanceSquared(vec3(0, 0, 0), vec3(1, 0, 0))).toEqual(1);
  expect(vec3DistanceSquared(vec3(1, 0, 0), vec3(1, 0, 0))).toEqual(0);
  expect(vec3DistanceSquared(vec3(1, 0, 0), vec3(-1, 0, 0))).toEqual(4);
  expect(vec3DistanceSquared(vec3(1, 1, 1), vec3(2, 2, 2))).toEqual(3);
  expect(vec3DistanceSquared(vec3(1, 1, 1), vec3(-1, -1, -1))).toEqual(12);
});

test('vec3ManhattanDistance', () => {
  expect(vec3ManhattanDistance(vec3(0, 0, 0), vec3(1, 0, 0))).toEqual(1);
  expect(vec3ManhattanDistance(vec3(10, -3, 4), vec3(2, 7, -8))).toEqual(30);
});

test('vec3Equal', () => {
  expect(vec3Equal(vec3(0, 0, 0), vec3(0, 0, 0))).toEqual(true);
  expect(vec3Equal(vec3(0, 0, 0), vec3(-0, -0, -0))).toEqual(true);
  expect(vec3Equal(vec3(1, 1, 1), vec3(1, 1, 1))).toEqual(true);
  expect(vec3Equal(vec3(1, 1, 1), vec3(0, 0, 0))).toEqual(false);
  expect(vec3Equal(vec3(0, 0, 0), vec3(1, 0, 0))).toEqual(false);
  expect(vec3Equal(vec3(0, 0, 0), vec3(0, 1, 0))).toEqual(false);
  expect(vec3Equal(vec3(0, 0, 0), vec3(0, 0, 1))).toEqual(false);
  expect(vec3Equal(vec3(0, 0, 0), vec3(1, 1, 1))).toEqual(false);
});

test('vec3AlmostEqual', () => {
  expect(vec3AlmostEqual(vec3(0, 0, 0), vec3(0, 0, 0))).toEqual(true);
  expect(vec3AlmostEqual(vec3(0, 0, 0), vec3(1e-10, 1e-10, 1e-10))).toEqual(
    true,
  );
  expect(vec3AlmostEqual(vec3(0, 0, 0), vec3(-1e-10, -1e-10, -1e-10))).toEqual(
    true,
  );
  expect(vec3AlmostEqual(vec3(1e-10, 1e-10, 1e-10), vec3(0, 0, 0))).toEqual(
    true,
  );
  expect(vec3AlmostEqual(vec3(-1e-10, -1e-10, -1e-10), vec3(0, 0, 0))).toEqual(
    true,
  );
  expect(vec3AlmostEqual(vec3(0, 0, 0), vec3(1e-8, 0, 0))).toEqual(false);
});

test('vec3Transform', () => {
  expect(vec3Transform(vec3(2, 3, 1), mat3Scaling(vec2(2, 3)))).toEqual(
    vec3(4, 9, 1),
  );
  expect(vec3Transform(vec3(2, 3, 1), mat3Translation(vec2(2, 3)))).toEqual(
    vec3(4, 6, 1),
  );
  expectToAlmostEqualVec3(
    vec3Transform(vec3(2, 3, 1), mat3Rotation(Math.PI / 2)),
    vec3(-3, 2, 1),
  );
});
