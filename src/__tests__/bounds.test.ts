import {
  boundsAlmostEqual,
  boundsArea,
  boundsCanonical,
  boundsCenter,
  boundsClone,
  boundsContainsPoint,
  boundsCorners,
  boundsCreate,
  boundsEqual,
  boundsIntersectingBounds,
  boundsPerimeter,
  boundsPosition,
  boundsRotate,
  boundsRotation,
  boundsScale,
  boundsSize,
  boundsTranslate,
  boundsUnit,
  vec2,
} from '..';

test('boundsCreate', () => {
  expect(boundsCreate()).toEqual(boundsCreate(vec2(0, 0), vec2(0, 0)));
  expect(boundsCreate(vec2(1, 2))).toEqual(
    boundsCreate(vec2(1, 2), vec2(0, 0)),
  );
  expect(boundsCreate(vec2(1, 2), vec2(3, 4))).toEqual(
    boundsCreate(vec2(1, 2), vec2(3, 4)),
  );
  expect(boundsCreate(vec2(1, 2), vec2(3, 4), 1.23)).toEqual(
    boundsCreate(vec2(1, 2), vec2(3, 4), 1.23),
  );
});

test('boundsClone', () => {
  expect(boundsClone(boundsCreate(vec2(2, 3), vec2(4, 5)))).toEqual(
    boundsCreate(vec2(2, 3), vec2(4, 5)),
  );

  expect(boundsClone(boundsCreate(vec2(2, 3), vec2(4, 5)))).toEqual(
    boundsCreate(vec2(2, 3), vec2(4, 5)),
  );
});

test('boundsUnit', () => {
  expect(boundsUnit()).toEqual(boundsCreate(vec2(1, 1), vec2(0, 0)));
});

test('boundsPosition', () => {
  expect(boundsPosition(boundsCreate(vec2(0, 0), vec2(0, 0)))).toEqual(
    vec2(0, 0),
  );
  expect(boundsPosition(boundsCreate(vec2(5, 6), vec2(2, 3)))).toEqual(
    vec2(2, 3),
  );
});

test('boundsSize', () => {
  expect(boundsSize(boundsCreate(vec2(0, 0), vec2(0, 0)))).toEqual(vec2(0, 0));
  expect(boundsSize(boundsCreate(vec2(2, 3), vec2(5, 6)))).toEqual(vec2(2, 3));
});

test('boundsRotation', () => {
  expect(boundsRotation(boundsCreate(vec2(0, 0), vec2(0, 0)))).toEqual(0);
  expect(boundsRotation(boundsCreate(vec2(2, 3), vec2(5, 6), 1.23))).toEqual(
    1.23,
  );
});

test('boundsArea', () => {
  expect(boundsArea(boundsCreate(vec2(0, 0), vec2(0, 0)))).toEqual(0);
  expect(boundsArea(boundsCreate(vec2(5, 6), vec2(2, 3)))).toEqual(30);
});

test('boundsPerimeter', () => {
  expect(boundsPerimeter(boundsCreate(vec2(0, 0), vec2(0, 0)))).toEqual(0);
  expect(boundsPerimeter(boundsCreate(vec2(5, 6), vec2(2, 3)))).toEqual(44);
});

test('boundsTranslate', () => {
  expect(
    boundsTranslate(vec2(0, 0), boundsCreate(vec2(0, 0), vec2(0, 0))),
  ).toEqual(boundsCreate(vec2(0, 0), vec2(0, 0)));
  expect(
    boundsTranslate(vec2(1, 2), boundsCreate(vec2(0, 0), vec2(0, 0))),
  ).toEqual(boundsCreate(vec2(0, 0), vec2(1, 2)));
  expect(
    boundsTranslate(vec2(1, 2), boundsCreate(vec2(4, 5), vec2(2, 3))),
  ).toEqual(boundsCreate(vec2(4, 5), vec2(3, 5)));
});

test('boundsScale', () => {
  expect(boundsScale(0, boundsCreate(vec2(0, 0), vec2(0, 0)))).toEqual(
    boundsCreate(vec2(0, 0), vec2(0, 0)),
  );
  expect(boundsScale(3, boundsCreate(vec2(0, 0), vec2(1, 2)))).toEqual(
    boundsCreate(vec2(0, 0), vec2(1, 2)),
  );
  expect(boundsScale(3, boundsCreate(vec2(3, 4), vec2(0, 0)))).toEqual(
    boundsCreate(vec2(9, 12), vec2(0, 0)),
  );
  expect(boundsScale(5, boundsCreate(vec2(3, 4), vec2(1, 2)))).toEqual(
    boundsCreate(vec2(15, 20), vec2(1, 2)),
  );
  expect(boundsScale(vec2(5, 6), boundsCreate(vec2(3, 4), vec2(1, 2)))).toEqual(
    boundsCreate(vec2(15, 24), vec2(1, 2)),
  );
});

test('boundsRotate', () => {
  expect(boundsRotate(0, boundsCreate())).toEqual(boundsCreate());
  expect(boundsRotate(1, boundsCreate(vec2(2, 3), vec2(4, 5)))).toEqual(
    boundsCreate(vec2(2, 3), vec2(4, 5), 1),
  );
  expect(boundsRotate(1, boundsCreate(vec2(2, 3), vec2(4, 5), 1))).toEqual(
    boundsCreate(vec2(2, 3), vec2(4, 5), 2),
  );
});

test('boundsIntersectingbounds', () => {
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(0, 0), vec2(0, 0)),
      boundsCreate(vec2(0, 0), vec2(0, 0)),
    ),
  ).toEqual(false);
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(2, 4), vec2(0, 0)),
      boundsCreate(vec2(6, 8), vec2(1.9, 0)),
    ),
  ).toEqual(true);
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(2, 4), vec2(0, 0)),
      boundsCreate(vec2(6, 8), vec2(2, 0)),
    ),
  ).toEqual(false);
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(2, 4), vec2(0, 0)),
      boundsCreate(vec2(6, 8), vec2(-5.9, 0)),
    ),
  ).toEqual(true);
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(2, 4), vec2(0, 0)),
      boundsCreate(vec2(6, 8), vec2(-6, 0)),
    ),
  ).toEqual(false);
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(2, 4), vec2(0, 0)),
      boundsCreate(vec2(6, 8), vec2(0, 3.9)),
    ),
  ).toEqual(true);
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(2, 4), vec2(0, 0)),
      boundsCreate(vec2(6, 8), vec2(0, 4)),
    ),
  ).toEqual(false);
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(2, 4), vec2(0, 0)),
      boundsCreate(vec2(6, 8), vec2(0, -7.9)),
    ),
  ).toEqual(true);
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(2, 4), vec2(0, 0)),
      boundsCreate(vec2(6, 8), vec2(0, -8)),
    ),
  ).toEqual(false);
  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(1, 1), vec2(1, 1)),
      boundsCreate(vec2(1, 1), vec2(-1, -1)),
    ),
  ).toEqual(false);

  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(1, 1), vec2(0, 0)),
      boundsCreate(vec2(1, 1), vec2(1, 0), 0.1),
    ),
  ).toEqual(true);

  expect(
    boundsIntersectingBounds(
      boundsCreate(vec2(1, 1), vec2(0, 0), 0.1),
      boundsCreate(vec2(1, 1), vec2(1, 0)),
    ),
  ).toEqual(true);
});

test('boundsContainsPoint', () => {
  expect(
    boundsContainsPoint(boundsCreate(vec2(0, 0), vec2(0, 0)), vec2(0, 0)),
  ).toEqual(false);
  expect(
    boundsContainsPoint(
      boundsCreate(vec2(0.0002, 0.0002), vec2(-0.0001, -0.0001)),
      vec2(0, 0),
    ),
  ).toEqual(true);
  expect(
    boundsContainsPoint(boundsCreate(vec2(4, 6), vec2(2, 3)), vec2(4, 6)),
  ).toEqual(true);
  expect(
    boundsContainsPoint(boundsCreate(vec2(4, 6), vec2(2, 3)), vec2(-2, 3)),
  ).toEqual(false);
});

test('boundsEqual', () => {
  expect(
    boundsEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4), vec2(1, 2)),
    ),
  ).toEqual(true);
  expect(
    boundsEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4), vec2(1, 8)),
    ),
  ).toEqual(false);
  expect(
    boundsEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4), vec2(9, 2)),
    ),
  ).toEqual(false);
  expect(
    boundsEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(5, 4), vec2(1, 2)),
    ),
  ).toEqual(false);
  expect(
    boundsEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 6), vec2(1, 2)),
    ),
  ).toEqual(false);
});

test('boundsAlmostEqual', () => {
  expect(
    boundsAlmostEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4), vec2(1, 2)),
    ),
  ).toEqual(true);
  expect(
    boundsAlmostEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4), vec2(1 + 1e-10, 2)),
    ),
  ).toEqual(true);
  expect(
    boundsAlmostEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4), vec2(1 + 1e-7, 2)),
    ),
  ).toEqual(false);
  expect(
    boundsAlmostEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4), vec2(1, 2 + 1e-10)),
    ),
  ).toEqual(true);
  expect(
    boundsAlmostEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4), vec2(1, 2 + 1e-7)),
    ),
  ).toEqual(false);
  expect(
    boundsAlmostEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3 + 1e-10, 4), vec2(1, 2)),
    ),
  ).toEqual(true);
  expect(
    boundsAlmostEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3 + 1e-7, 4), vec2(1, 2)),
    ),
  ).toEqual(false);
  expect(
    boundsAlmostEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4 + 1e-10), vec2(1, 2)),
    ),
  ).toEqual(true);
  expect(
    boundsAlmostEqual(
      boundsCreate(vec2(3, 4), vec2(1, 2)),
      boundsCreate(vec2(3, 4 + 1e-7), vec2(1, 2)),
    ),
  ).toEqual(false);
});

test('boundsCorners', () => {
  expect(boundsCorners(boundsCreate())).toEqual([
    vec2(),
    vec2(),
    vec2(),
    vec2(),
  ]);

  expect(boundsCorners(boundsCreate(vec2(10, 20), vec2(53, 64)))).toEqual([
    vec2(53, 64),
    vec2(63, 64),
    vec2(63, 84),
    vec2(53, 84),
  ]);

  expect(
    boundsCorners(boundsCreate(vec2(10, 20), vec2(53, 64), Math.PI / 2)),
  ).toEqual([vec2(68, 69), vec2(68, 79), vec2(48, 79), vec2(48, 69)]);
});

test('boundsCanonical', () => {
  expect(boundsCanonical(boundsCreate(vec2(7, 8), vec2(2, 3)))).toEqual(
    boundsCreate(vec2(7, 8), vec2(2, 3)),
  );
  expect(boundsCanonical(boundsCreate(vec2(-7, 8), vec2(2, 3)))).toEqual(
    boundsCreate(vec2(7, 8), vec2(-5, 3)),
  );
  expect(boundsCanonical(boundsCreate(vec2(7, -8), vec2(2, 3)))).toEqual(
    boundsCreate(vec2(7, 8), vec2(2, -5)),
  );
  expect(boundsCanonical(boundsCreate(vec2(-7, -8), vec2(2, 3)))).toEqual(
    boundsCreate(vec2(7, 8), vec2(-5, -5)),
  );
  expect(boundsCanonical(boundsCreate(vec2(-7, -8), vec2(-2, -3)))).toEqual(
    boundsCreate(vec2(7, 8), vec2(-9, -11)),
  );
});

test('boundsCenter', () => {
  expect(boundsCenter(boundsCreate(vec2(8, 12), vec2(0, 0)))).toEqual(
    vec2(4, 6),
  );
  expect(boundsCenter(boundsCreate(vec2(8, 12), vec2(3, 5)))).toEqual(
    vec2(7, 11),
  );
});
