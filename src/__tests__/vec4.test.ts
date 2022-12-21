import {
  vec4,
  vec4Add,
  vec4AlmostEqual,
  vec4Angle,
  vec4Ceil,
  vec4Clamp,
  vec4Clone,
  vec4Distance,
  vec4DistanceSquared,
  vec4Div,
  vec4Dot,
  vec4Equal,
  vec4Floor,
  vec4Identity,
  vec4Invert,
  vec4Length,
  vec4LengthSquared,
  vec4ManhattanDistance,
  vec4Max,
  vec4Min,
  vec4Mult,
  vec4Negate,
  vec4Normalize,
  vec4Round,
  vec4Scale,
  vec4Sub,
  vec4Unit,
  vec4Zero,
} from '..';

test('vec4', () => {
  expect(vec4()).toEqual(vec4(0, 0, 0, 0));
  expect(vec4(1)).toEqual(vec4(1, 0, 0, 0));
  expect(vec4(1, 2)).toEqual(vec4(1, 2, 0, 0));
  expect(vec4(1, 2, 3)).toEqual(vec4(1, 2, 3, 0));
  expect(vec4(1, 2, 3, 4)).toEqual(vec4(1, 2, 3, 4));
  expect(vec4(-3, -4, -5, -6)).toEqual(vec4(-3, -4, -5, -6));
});

test('vec4Clone', () => {
  expect(vec4Clone(vec4(1, 2, 3, 4))).toEqual(vec4(1, 2, 3, 4));
});

test('vec4Identity', () => {
  expect(vec4Identity()).toEqual(vec4(1, 0, 0, 0));
});

test('vec4Zero', () => {
  expect(vec4Zero()).toEqual(vec4(0, 0, 0, 0));
});

test('vec4Unit', () => {
  expect(vec4Unit()).toEqual(vec4(1, 1, 1, 1));
});

test('vec4Length', () => {
  expect(vec4Length(vec4(0, 0, 0, 0))).toEqual(0);
  expect(vec4Length(vec4(1, 1, 1, 1))).toEqual(2);
  expect(vec4Length(vec4(3, 4, 5, 6))).toEqual(9.273618495495704);
  expect(vec4Length(vec4(-3, -4, -5, -6))).toEqual(9.273618495495704);
});

test('vec4LengthSquared', () => {
  expect(vec4LengthSquared(vec4(0, 0, 0, 0))).toEqual(0);
  expect(vec4LengthSquared(vec4(1, 1, 1, 1))).toEqual(4);
  expect(vec4LengthSquared(vec4(3, 4, 5, 6))).toEqual(86);
  expect(vec4LengthSquared(vec4(-3, -4, -5, 6))).toEqual(86);
});

test('vec4Normalize', () => {
  expect(vec4Normalize(vec4(1, 0, 0, 0))).toEqual(vec4(1, 0, 0, 0));
  expect(vec4Normalize(vec4(-1, 0, 0, 0))).toEqual(vec4(-1, 0, 0, 0));
  expect(vec4Normalize(vec4(0, 1, 0, 0))).toEqual(vec4(0, 1, 0, 0));
  expect(vec4Normalize(vec4(0, -1, 0, 0))).toEqual(vec4(0, -1, 0, 0));
  expect(vec4Normalize(vec4(0, 0, 1, 0))).toEqual(vec4(0, 0, 1, 0));
  expect(vec4Normalize(vec4(0, 0, -1, 0))).toEqual(vec4(0, 0, -1, 0));
  expect(vec4Normalize(vec4(0, 0, 0, 1))).toEqual(vec4(0, 0, 0, 1));
  expect(vec4Normalize(vec4(0, 0, 0, -1))).toEqual(vec4(0, 0, 0, -1));
  expect(vec4Normalize(vec4(3, 4, 5, 6))).toEqual(
    vec4(
      0.3234983196103152,
      0.43133109281375365,
      0.539163866017192,
      0.6469966392206304,
    ),
  );
});

test('vec4Negate', () => {
  expect(vec4Negate(vec4(0, 0, 0, 0))).toEqual(vec4(-0, -0, -0, -0));
  expect(vec4Negate(vec4(1, 1, 1, 1))).toEqual(vec4(-1, -1, -1, -1));
  expect(vec4Negate(vec4(-1, -1, -1, -1))).toEqual(vec4(1, 1, 1, 1));
  expect(vec4Negate(vec4(1, -1, 1, -1))).toEqual(vec4(-1, 1, -1, 1));
  expect(vec4Negate(vec4(-2, 2, -2, 2))).toEqual(vec4(2, -2, 2, -2));
});

test('vec4Invert', () => {
  expect(vec4Invert(vec4(1, 1, 1, 1))).toEqual(vec4(1, 1, 1, 1));
  expect(vec4Invert(vec4(-1, -1, -1, -1))).toEqual(vec4(-1, -1, -1, -1));
  expect(vec4Invert(vec4(2, 4, 8, 16))).toEqual(vec4(0.5, 0.25, 0.125, 0.0625));
  expect(vec4Invert(vec4(-16, -8, -4, -2))).toEqual(
    vec4(-0.0625, -0.125, -0.25, -0.5),
  );
});

test('vec4Floor', () => {
  expect(vec4Floor(vec4(-1.6, -1.7, -1.8, -1.9))).toEqual(vec4(-2, -2, -2, -2));
  expect(vec4Floor(vec4(-1.1, -1.2, -1.3, -1.4))).toEqual(vec4(-2, -2, -2, -2));
  expect(vec4Floor(vec4(-0.6, -0.7, -0.8, -0.9))).toEqual(vec4(-1, -1, -1, -1));
  expect(vec4Floor(vec4(-0.1, -0.2, -0.3, -0.4))).toEqual(vec4(-1, -1, -1, -1));
  expect(vec4Floor(vec4(-0, -0, -0, -0))).toEqual(vec4(-0, -0, -0, -0));
  expect(vec4Floor(vec4(0, 0, 0, 0))).toEqual(vec4(0, 0, 0, 0));
  expect(vec4Floor(vec4(0.1, 0.2, 0.3, 0.4))).toEqual(vec4(0, 0, 0, 0));
  expect(vec4Floor(vec4(0.6, 0.7, 0.8, 0.9))).toEqual(vec4(0, 0, 0, 0));
  expect(vec4Floor(vec4(1.1, 1.2, 1.3, 1.4))).toEqual(vec4(1, 1, 1, 1));
  expect(vec4Floor(vec4(1.6, 1.7, 1.8, 1.9))).toEqual(vec4(1, 1, 1, 1));
});

test('vec4Ceil', () => {
  expect(vec4Ceil(vec4(-1.6, -1.7, -1.8, -1.9))).toEqual(vec4(-1, -1, -1, -1));
  expect(vec4Ceil(vec4(-1.1, -1.2, -1.3, -1.4))).toEqual(vec4(-1, -1, -1, -1));
  expect(vec4Ceil(vec4(-0.6, -0.7, -0.8, -0.9))).toEqual(vec4(-0, -0, -0, -0));
  expect(vec4Ceil(vec4(-0.1, -0.2, -0.3, -0.4))).toEqual(vec4(-0, -0, -0, -0));
  expect(vec4Ceil(vec4(-0, -0, -0, -0))).toEqual(vec4(-0, -0, -0, -0));
  expect(vec4Ceil(vec4(0, 0, 0, 0))).toEqual(vec4(0, 0, 0, 0));
  expect(vec4Ceil(vec4(0.1, 0.2, 0.3, 0.4))).toEqual(vec4(1, 1, 1, 1));
  expect(vec4Ceil(vec4(0.6, 0.7, 0.8, 0.9))).toEqual(vec4(1, 1, 1, 1));
  expect(vec4Ceil(vec4(1.1, 1.2, 1.3, 1.4))).toEqual(vec4(2, 2, 2, 2));
  expect(vec4Ceil(vec4(1.6, 1.7, 1.8, 1.9))).toEqual(vec4(2, 2, 2, 2));
});

test('vec4Round', () => {
  expect(vec4Round(vec4(-1.6, -1.7, -1.8, -1.9))).toEqual(vec4(-2, -2, -2, -2));
  expect(vec4Round(vec4(-1.1, -1.2, -1.3, -1.4))).toEqual(vec4(-1, -1, -1, -1));
  expect(vec4Round(vec4(-0.6, -0.7, -0.8, -0.9))).toEqual(vec4(-1, -1, -1, -1));
  expect(vec4Round(vec4(-0.1, -0.2, -0.3, -0.4))).toEqual(vec4(-0, -0, -0, -0));
  expect(vec4Round(vec4(-0, -0, -0, -0))).toEqual(vec4(-0, -0, -0, -0));
  expect(vec4Round(vec4(0, 0, 0, 0))).toEqual(vec4(0, 0, 0, 0));
  expect(vec4Round(vec4(0.1, 0.2, 0.3, 0.4))).toEqual(vec4(0, 0, 0, 0));
  expect(vec4Round(vec4(0.6, 0.7, 0.8, 0.9))).toEqual(vec4(1, 1, 1, 1));
  expect(vec4Round(vec4(1.1, 1.2, 1.3, 1.4))).toEqual(vec4(1, 1, 1, 1));
  expect(vec4Round(vec4(1.6, 1.7, 1.8, 1.9))).toEqual(vec4(2, 2, 2, 2));
});

test('vec4Clamp', () => {
  expect(vec4Clamp(vec4(0, 0, 0, 0))).toEqual(vec4(0, 0, 0, 0));
  expect(vec4Clamp(vec4(-2, -3, -4, -5))).toEqual(vec4(0, 0, 0, 0));
  expect(vec4Clamp(vec4(3, 4, 5, 6))).toEqual(vec4(1, 1, 1, 1));
  expect(vec4Clamp(vec4(-2, -3, -4, -5), vec4(-1, -2, -3, -4))).toEqual(
    vec4(-1, -2, -3, -4),
  );
  expect(vec4Clamp(vec4(3, 4, 5, 6), vec4(-1, -2, -3, -4))).toEqual(
    vec4(1, 1, 1, 1),
  );
  expect(
    vec4Clamp(vec4(3, 4, 5, 6), vec4(-1, -2, -3, -4), vec4(2, 3, 4, 5)),
  ).toEqual(vec4(2, 3, 4, 5));
});

test('vec4Scale', () => {
  expect(vec4Scale(2, vec4(1, 2, 3, 4))).toEqual(vec4(2, 4, 6, 8));
  expect(vec4Scale(0, vec4(1, 2, 3, 4))).toEqual(vec4(0, 0, 0, 0));
  expect(vec4Scale(-1, vec4(1, 2, 3, 4))).toEqual(vec4(-1, -2, -3, -4));
  expect(vec4Scale(4)).toEqual(vec4(4, 0, 0, 0));
  expect(vec4Scale(vec4(3, 4, 5, 6), vec4(1, 2, 3, 4))).toEqual(
    vec4(3, 8, 15, 24),
  );
});

test('vec4Add', () => {
  expect(vec4Add(vec4(1, 2, 3, 4), vec4(3, 4, 5, 6))).toEqual(
    vec4(4, 6, 8, 10),
  );
  expect(vec4Add(vec4(1, 2, 3, 4), vec4(-1, -2, -3, -4))).toEqual(
    vec4(0, 0, 0, 0),
  );
});

test('vec4Sub', () => {
  expect(vec4Sub(vec4(1, 2, 3, 4), vec4(3, 4, 5, 6))).toEqual(
    vec4(-2, -2, -2, -2),
  );
  expect(vec4Sub(vec4(1, 2, 3, 4), vec4(1, 2, 3, 4))).toEqual(vec4(0, 0, 0, 0));
});

test('vec4Mult', () => {
  expect(vec4Mult(vec4(1, 2, 3, 4), vec4(3, 4, 5, 6))).toEqual(
    vec4(3, 8, 15, 24),
  );
  expect(vec4Mult(vec4(1, 2, 3, 4), vec4(-1, -2, -3, -4))).toEqual(
    vec4(-1, -4, -9, -16),
  );
  expect(vec4Mult(vec4(1, 2, 3, 4), vec4(0, 0, 0, 0))).toEqual(
    vec4(0, 0, 0, 0),
  );
});

test('vec4Div', () => {
  expect(vec4Div(vec4(1, 2, 3, 4), vec4(3, 4, 5, 6))).toEqual(
    vec4(1 / 3, 1 / 2, 0.6, 2 / 3),
  );
  expect(vec4Div(vec4(1, 2, 3, 4), vec4(-1, -2, -3, -4))).toEqual(
    vec4(-1, -1, -1, -1),
  );
  expect(vec4Div(vec4(0, 0, 0, 0), vec4(1, 2, 3, 4))).toEqual(vec4(0, 0, 0, 0));
});

test('vec4Min', () => {
  expect(vec4Min(vec4(1, 2, 3, 4), vec4(3, 4, 5, 6))).toEqual(vec4(1, 2, 3, 4));
  expect(vec4Min(vec4(4, 3, 2, 1), vec4(1, 4, 9, 16))).toEqual(
    vec4(1, 3, 2, 1),
  );
  expect(vec4Min(vec4(1, 4, 9, 16), vec4(4, 3, 2, 1))).toEqual(
    vec4(1, 3, 2, 1),
  );
  expect(vec4Min(vec4(1, 2, 3, 4), vec4(-1, -2, -3, -4))).toEqual(
    vec4(-1, -2, -3, -4),
  );
  expect(vec4Min(vec4(0, 0, 0, 0), vec4(1, 2, 3, 4))).toEqual(vec4(0, 0, 0, 0));
});

test('vec4Max', () => {
  expect(vec4Max(vec4(1, 2, 3, 4), vec4(3, 4, 5, 6))).toEqual(vec4(3, 4, 5, 6));
  expect(vec4Max(vec4(4, 3, 2, 1), vec4(1, 4, 9, 16))).toEqual(
    vec4(4, 4, 9, 16),
  );
  expect(vec4Max(vec4(1, 4, 9, 16), vec4(4, 3, 2, 1))).toEqual(
    vec4(4, 4, 9, 16),
  );
  expect(vec4Max(vec4(1, 2, 3, 4), vec4(-1, -2, -3, -4))).toEqual(
    vec4(1, 2, 3, 4),
  );
  expect(vec4Max(vec4(0, 0, 0, 0), vec4(1, 2, 3, 4))).toEqual(vec4(1, 2, 3, 4));
});

test('vec4Dot', () => {
  expect(vec4Dot(vec4(1, 2, 3, 4), vec4(3, 4, 5, 6))).toEqual(50);
  expect(vec4Dot(vec4(2, -2, 2, -2), vec4(4, 4, 4, 4))).toEqual(0);
  expect(vec4Dot(vec4(-1, 2, -3, 4), vec4(3, 4, 5, 6))).toEqual(14);
  expect(vec4Dot(vec4(1, 2, 3, 4), vec4(0, 0, 0, 0))).toEqual(0);
});

test('vec4Angle', () => {
  expect(vec4Angle(vec4(1, 0, 0, 0), vec4(1, 0, 0, 0))).toEqual(0);
  expect(vec4Angle(vec4(1, 0, 0, 0), vec4(0, 1, 0, 0))).toEqual(Math.PI / 2);
  expect(vec4Angle(vec4(1, 0, 0, 0), vec4(0, 0, 1, 0))).toEqual(Math.PI / 2);
  expect(
    vec4Angle(
      vec4(1, 0, 0, 0),
      vec4(Math.SQRT1_2, Math.SQRT1_2, Math.SQRT1_2, Math.SQRT1_2),
    ),
  ).toEqual(Math.PI / 4);
  expect(
    vec4Angle(
      vec4(1, 0, 0, 0),
      vec4(Math.SQRT1_2, -Math.SQRT1_2, Math.SQRT1_2, -Math.SQRT1_2),
    ),
  ).toEqual(Math.PI / 4);
  expect(vec4Angle(vec4(1, 0, 0, 0), vec4(-1, 0, 0, 0))).toEqual(Math.PI);
});

test('vec4Distance', () => {
  expect(vec4Distance(vec4(0, 0, 0, 0), vec4(0, 0, 0, 0))).toEqual(0);
  expect(vec4Distance(vec4(0, 0, 0, 0), vec4(1, 0, 0, 0))).toEqual(1);
  expect(vec4Distance(vec4(1, 0, 0, 0), vec4(1, 0, 0, 0))).toEqual(0);
  expect(vec4Distance(vec4(1, 0, 0, 0), vec4(-1, 0, 0, 0))).toEqual(2);
  expect(vec4Distance(vec4(1, 1, 1, 1), vec4(2, 2, 2, 2))).toEqual(2);
  expect(vec4Distance(vec4(1, 1, 1, 1), vec4(-1, -1, -1, -1))).toEqual(4);
});

test('vec4DistanceSquared', () => {
  expect(vec4DistanceSquared(vec4(0, 0, 0, 0), vec4(0, 0, 0, 0))).toEqual(0);
  expect(vec4DistanceSquared(vec4(0, 0, 0, 0), vec4(1, 0, 0, 0))).toEqual(1);
  expect(vec4DistanceSquared(vec4(1, 0, 0, 0), vec4(1, 0, 0, 0))).toEqual(0);
  expect(vec4DistanceSquared(vec4(1, 0, 0, 0), vec4(-1, 0, 0, 0))).toEqual(4);
  expect(vec4DistanceSquared(vec4(1, 1, 1, 1), vec4(2, 2, 2, 2))).toEqual(4);
  expect(vec4DistanceSquared(vec4(1, 1, 1, 1), vec4(-1, -1, -1, -1))).toEqual(
    16,
  );
});

test('vec4ManhattanDistance', () => {
  expect(vec4ManhattanDistance(vec4(0, 0, 0, 0), vec4(1, 0, 0, 0))).toEqual(1);
  expect(vec4ManhattanDistance(vec4(10, -3, 4, 9), vec4(2, 7, -8, -1))).toEqual(
    40,
  );
});

test('vec4Equal', () => {
  expect(vec4Equal(vec4(0, 0, 0, 0), vec4(0, 0, 0, 0))).toEqual(true);
  expect(vec4Equal(vec4(0, 0, 0, 0), vec4(-0, -0, -0, -0))).toEqual(true);
  expect(vec4Equal(vec4(1, 1, 1, 1), vec4(1, 1, 1, 1))).toEqual(true);
  expect(vec4Equal(vec4(1, 1, 1, 1), vec4(0, 0, 0, 0))).toEqual(false);
  expect(vec4Equal(vec4(0, 0, 0, 0), vec4(1, 0, 0, 0))).toEqual(false);
  expect(vec4Equal(vec4(0, 0, 0, 0), vec4(0, 1, 0, 0))).toEqual(false);
  expect(vec4Equal(vec4(0, 0, 0, 0), vec4(0, 0, 1, 0))).toEqual(false);
  expect(vec4Equal(vec4(0, 0, 0, 0), vec4(1, 1, 1, 1))).toEqual(false);
});

test('vec4AlmostEqual', () => {
  expect(vec4AlmostEqual(vec4(0, 0, 0, 0), vec4(0, 0, 0, 0))).toEqual(true);
  expect(
    vec4AlmostEqual(vec4(0, 0, 0, 0), vec4(1e-10, 1e-10, 1e-10, 1e-10)),
  ).toEqual(true);
  expect(
    vec4AlmostEqual(vec4(0, 0, 0, 0), vec4(-1e-10, -1e-10, -1e-10, -1e-10)),
  ).toEqual(true);
  expect(
    vec4AlmostEqual(vec4(1e-10, 1e-10, 1e-10, 1e-10), vec4(0, 0, 0, 0)),
  ).toEqual(true);
  expect(
    vec4AlmostEqual(vec4(-1e-10, -1e-10, -1e-10, -1e-10), vec4(0, 0, 0, 0)),
  ).toEqual(true);
  expect(vec4AlmostEqual(vec4(0, 0, 0, 0), vec4(1e-8, 0, 0, 0))).toEqual(false);
});
