import {
  Mat2,
  mat2,
  mat2Add,
  mat2AlmostEqual,
  mat2Clone,
  mat2Determinant,
  mat2Equal,
  mat2Identity,
  mat2Invert,
  mat2Mult,
  mat2Rotate,
  mat2Scale,
  mat2Sub,
  mat2Transpose,
} from "..";

const expectToAlmostEqualMat2 = (target: Mat2, expected: Mat2) => {
  expect(mat2AlmostEqual(target, expected)).toEqual(true);
};

test("mat2", () => {
  expect(mat2()).toEqual(mat2(0, 0, 0, 0));
  expect(mat2(1)).toEqual(mat2(1, 0, 0, 0));
  expect(mat2(1, 2)).toEqual(mat2(1, 2, 0, 0));
  expect(mat2(1, 2, 3)).toEqual(mat2(1, 2, 3, 0));
  expect(mat2(1, 2, 3, 4)).toEqual(mat2(1, 2, 3, 4));
  expect(mat2(-3, -4, -5, -6)).toEqual(mat2(-3, -4, -5, -6));
});

test("mat2Clone", () => {
  expect(mat2Clone(mat2(1, 2, 3, 4))).toEqual(mat2(1, 2, 3, 4));
});

test("mat2Identity", () => {
  expect(mat2Identity()).toEqual(mat2(1, 0, 0, 1));
});

test("mat2Determinant", () => {
  expect(mat2Determinant(mat2())).toEqual(0);
  expect(mat2Determinant(mat2Identity())).toEqual(1);
  expect(mat2Determinant(mat2(1, 2, 3, 4))).toEqual(-2);
  expect(mat2Determinant(mat2(9, 4, 7, 3))).toEqual(-1);
});

test("mat2Transpose", () => {
  expect(mat2Transpose(mat2Identity())).toEqual(mat2Identity());
  expect(mat2Transpose(mat2(1, 2, 3, 4))).toEqual(mat2(1, 3, 2, 4));
});

test("mat2Invert", () => {
  expectToAlmostEqualMat2(mat2Invert(mat2Identity())!, mat2Identity());

  const m = mat2(1, 2, 3, 4);
  expectToAlmostEqualMat2(mat2Mult(m, mat2Invert(m)!), mat2Identity());
  expectToAlmostEqualMat2(mat2Mult(mat2Invert(m)!, m), mat2Identity());

  expect(mat2Invert(mat2(0, 0, 1, 1))).toEqual(null);
});

test("mat2Add", () => {
  expect(mat2Add(mat2Identity(), mat2Identity())).toEqual(mat2(2, 0, 0, 2));
  expect(mat2Add(mat2(1, 3, 2, 4), mat2(5, 0, 6, 7))).toEqual(
    mat2(6, 3, 8, 11)
  );
  expect(mat2Add(mat2(1, 3, 2, 4), mat2())).toEqual(mat2(1, 3, 2, 4));
  expect(mat2Add(mat2(), mat2(1, 3, 2, 4))).toEqual(mat2(1, 3, 2, 4));
});

test("mat2Sub", () => {
  expect(mat2Sub(mat2Identity(), mat2Identity())).toEqual(mat2(0, 0, 0, 0));
  expect(mat2Sub(mat2(1, 3, 2, 4), mat2(5, 0, 6, 7))).toEqual(
    mat2(-4, 3, -4, -3)
  );
  expect(mat2Sub(mat2(1, 3, 2, 4), mat2())).toEqual(mat2(1, 3, 2, 4));
  expect(mat2Sub(mat2(), mat2(1, 3, 2, 4))).toEqual(mat2(-1, -3, -2, -4));
});

test("mat2Mult", () => {
  expect(mat2Mult()).toEqual(mat2Identity());

  expect(mat2Mult(mat2Identity())).toEqual(mat2Identity());

  expect(mat2Mult(mat2Identity(), mat2Identity())).toEqual(mat2Identity());

  expect(mat2Mult(mat2Identity(), mat2Identity(), mat2Identity())).toEqual(
    mat2Identity()
  );

  expect(mat2Mult(mat2(1, 3, 2, 4), mat2(5, 0, 6, 7))).toEqual(
    mat2(5, 15, 20, 46)
  );

  expect(mat2Mult(mat2(1, 3, 2, 4), mat2Identity())).toEqual(mat2(1, 3, 2, 4));

  expect(mat2Mult(mat2Identity(), mat2(1, 3, 2, 4))).toEqual(mat2(1, 3, 2, 4));

  expect(
    mat2Mult(mat2(1, 3, 2, 4), mat2(5, 0, 6, 7), mat2(8, 7, 6, 5))
  ).toEqual(mat2(180, 442, 130, 320));
});

test("mat2Scale", () => {
  expect(mat2Scale(3)).toEqual(mat2(3, 0, 0, 3));
  expect(mat2Scale(2, mat2(1, 2, 3, 4))).toEqual(mat2(2, 4, 6, 8));
});

test("mat2Rotate", () => {
  expectToAlmostEqualMat2(mat2Rotate(Math.PI), mat2(-1, 0, 0, -1));
  expectToAlmostEqualMat2(
    mat2Rotate(Math.PI, mat2(1, 2, 3, 4)),
    mat2(-1, -2, -3, -4)
  );
  expectToAlmostEqualMat2(
    mat2Rotate(Math.PI / 4, mat2(1, 2, 3, 4)),
    mat2(
      2.82842712474619,
      4.242640687119285,
      1.4142135623730954,
      1.4142135623730954
    )
  );
});

test("mat2Equal", () => {
  expect(mat2Equal(mat2(), mat2())).toEqual(true);
  expect(mat2Equal(mat2(1, 2, 3, 4), mat2(1, 2, 3, 4))).toEqual(true);
  expect(mat2Equal(mat2(), mat2(1e-10, 1e-10, 1e-10, 1e-10))).toEqual(false);
  expect(mat2Equal(mat2(1e-10, 1e-10, 1e-10, 1e-10), mat2())).toEqual(false);
});

test("mat2AlmostEqual", () => {
  expect(mat2AlmostEqual(mat2(), mat2())).toEqual(true);
  expect(mat2AlmostEqual(mat2(1e-10, 1e-10, 1e-10, 1e-10), mat2())).toEqual(
    true
  );
  expect(mat2AlmostEqual(mat2(), mat2(1e-10, 1e-10, 1e-10, 1e-10))).toEqual(
    true
  );
  expect(mat2AlmostEqual(mat2(), mat2(1e-8))).toEqual(false);
});
