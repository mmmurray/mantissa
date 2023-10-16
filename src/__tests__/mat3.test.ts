import {
  Mat3,
  mat3,
  mat3Add,
  mat3AlmostEqual,
  mat3Clone,
  mat3Determinant,
  mat3Equal,
  mat3Identity,
  mat3Invert,
  mat3Mult,
  mat3Projection,
  mat3Rotation,
  mat3Scale,
  mat3Scaling,
  mat3Sub,
  mat3Translation,
  mat3Transpose,
  vec2,
  vec3,
} from "..";

const expectToAlmostEqualMat3 = (target: Mat3, expected: Mat3) => {
  expect(mat3AlmostEqual(target, expected)).toEqual(true);
};

test("mat3", () => {
  expect(mat3()).toEqual(mat3(0, 0, 0, 0, 0, 0, 0, 0, 0));
  expect(mat3(1)).toEqual(mat3(1, 0, 0, 0, 0, 0, 0, 0, 0));
  expect(mat3(1, 2)).toEqual(mat3(1, 2, 0, 0, 0, 0, 0, 0, 0));
  expect(mat3(1, 2, 3)).toEqual(mat3(1, 2, 3, 0, 0, 0, 0, 0, 0));
  expect(mat3(1, 2, 3, 4)).toEqual(mat3(1, 2, 3, 4, 0, 0, 0, 0, 0));
  expect(mat3(1, 2, 3, 4, 5)).toEqual(mat3(1, 2, 3, 4, 5, 0, 0, 0, 0));
  expect(mat3(1, 2, 3, 4, 5, 6)).toEqual(mat3(1, 2, 3, 4, 5, 6, 0, 0, 0));
  expect(mat3(1, 2, 3, 4, 5, 6, 7)).toEqual(mat3(1, 2, 3, 4, 5, 6, 7, 0, 0));
  expect(mat3(1, 2, 3, 4, 5, 6, 7, 8)).toEqual(mat3(1, 2, 3, 4, 5, 6, 7, 8, 0));
  expect(mat3(1, 2, 3, 4, 5, 6, 7, 8, 9)).toEqual(
    mat3(1, 2, 3, 4, 5, 6, 7, 8, 9)
  );
  expect(mat3(-1, -2, -3, -4, -5, -6, -7, -8, -9)).toEqual(
    mat3(-1, -2, -3, -4, -5, -6, -7, -8, -9)
  );
});

test("mat3Clone", () => {
  expect(mat3Clone(mat3(1, 2, 3, 4, 5, 6, 7, 8, 9))).toEqual(
    mat3(1, 2, 3, 4, 5, 6, 7, 8, 9)
  );
});

test("mat3Identity", () => {
  expect(mat3Identity()).toEqual(mat3(1, 0, 0, 0, 1, 0, 0, 0, 1));
});

test("mat3Determinant", () => {
  expect(mat3Determinant(mat3())).toEqual(0);
  expect(mat3Determinant(mat3Identity())).toEqual(1);
  expect(mat3Determinant(mat3(1, 2, 3, 4, 5, 6, 7, 8, 9))).toEqual(0);
  expect(mat3Determinant(mat3(7, 4, 3, 14, 8, 26, 17, -5, 11))).toEqual(2060);
});

test("mat3Transpose", () => {
  expect(mat3Transpose(mat3Identity())).toEqual(mat3Identity());
  expect(mat3Transpose(mat3(1, 2, 3, 4, 5, 6, 7, 8, 9))).toEqual(
    mat3(1, 4, 7, 2, 5, 8, 3, 6, 9)
  );
});

test("mat3Invert", () => {
  expectToAlmostEqualMat3(mat3Invert(mat3Identity())!, mat3Identity());

  const m1 = mat3(11, 2, 3, 4, 5, 6, 7, 8, 9);
  expectToAlmostEqualMat3(mat3Mult(m1, mat3Invert(m1)!), mat3Identity());
  expectToAlmostEqualMat3(mat3Mult(mat3Invert(m1)!, m1), mat3Identity());

  const m2 = mat3Scaling(vec2(2, 3));
  expectToAlmostEqualMat3(mat3Mult(mat3Invert(m2)!, m2), mat3Identity());

  const m3 = mat3Mult(
    mat3Scaling(1.2),
    mat3Translation(vec2(500, 200)),
    mat3Rotation(1)
  );
  expectToAlmostEqualMat3(mat3Mult(mat3Invert(m3)!, m3), mat3Identity());

  expect(mat3Invert(mat3(0, 0, 0, 0, 0, 1, 1, 1))).toEqual(null);
});

test("mat3Add", () => {
  expect(mat3Add(mat3Identity(), mat3Identity())).toEqual(
    mat3(2, 0, 0, 0, 2, 0, 0, 0, 2)
  );
  expect(
    mat3Add(mat3(1, 2, 3, 4, 5, 6, 7, 8, 9), mat3(9, 8, 7, 6, 5, 4, 3, 2, 1))
  ).toEqual(mat3(10, 10, 10, 10, 10, 10, 10, 10, 10));
});

test("mat3Sub", () => {
  expect(mat3Sub(mat3Identity(), mat3Identity())).toEqual(
    mat3(0, 0, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(mat3Sub(mat3(1, 2, 3, 4, 5, 6, 7, 8, 9), mat3())).toEqual(
    mat3(1, 2, 3, 4, 5, 6, 7, 8, 9)
  );
  expect(mat3Sub(mat3(), mat3(1, 2, 3, 4, 5, 6, 7, 8, 9))).toEqual(
    mat3(-1, -2, -3, -4, -5, -6, -7, -8, -9)
  );
});

test("mat3Mult", () => {
  expect(mat3Mult()).toEqual(mat3Identity());

  expect(mat3Mult(mat3Identity())).toEqual(mat3Identity());

  expect(mat3Mult(mat3Identity(), mat3Identity())).toEqual(mat3Identity());

  expect(mat3Mult(mat3Identity(), mat3Identity(), mat3Identity())).toEqual(
    mat3Identity()
  );

  expect(
    mat3Mult(mat3(1, 4, 7, 2, 5, 8, 3, 6, 9), mat3(9, 6, 3, 7, 5, 2, 8, 4, 1))
  ).toEqual(mat3(30, 84, 138, 23, 65, 107, 19, 58, 97));

  expect(
    mat3Mult(
      mat3(10, 4, 2, 20, 13, 3, 11, 6, 5),
      mat3(19, 8, 15, 7, 12, 17, 14, 9, 21)
    )
  ).toEqual(mat3(515, 270, 137, 497, 286, 135, 551, 299, 160));

  expect(
    mat3Mult(
      mat3(10, 4, 2, 20, 13, 3, 11, 6, 5),
      mat3(19, 8, 15, 7, 12, 17, 14, 9, 21),
      mat3(8, 2, 1, 3, 9, 7, 5, 2, 4)
    )
  ).toEqual(mat3(5665, 3031, 1526, 9875, 5477, 2746, 5773, 3118, 1595));
});

test("mat3Scale", () => {
  expect(mat3Scale(3)).toEqual(mat3(3, 0, 0, 0, 3, 0, 0, 0, 3));
  expect(mat3Scale(vec2(3, 4))).toEqual(mat3(3, 0, 0, 0, 4, 0, 0, 0, 1));
  expect(mat3Scale(vec3(3, 4, 5))).toEqual(mat3(3, 0, 0, 0, 4, 0, 0, 0, 5));
  expect(mat3Scale(2, mat3(1, 2, 3, 4, 5, 6, 7, 8, 9))).toEqual(
    mat3(2, 4, 6, 8, 10, 12, 14, 16, 18)
  );
});

test("mat3Equal", () => {
  expect(mat3Equal(mat3(), mat3())).toEqual(true);
  expect(
    mat3Equal(mat3(1, 2, 3, 4, 5, 6, 7, 8, 9), mat3(1, 2, 3, 4, 5, 6, 7, 8, 9))
  ).toEqual(true);
  expect(
    mat3Equal(
      mat3(1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10),
      mat3()
    )
  ).toEqual(false);
  expect(
    mat3Equal(
      mat3(),
      mat3(1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10)
    )
  ).toEqual(false);
});

test("mat3AlmostEqual", () => {
  expect(mat3AlmostEqual(mat3(), mat3())).toEqual(true);
  expect(
    mat3AlmostEqual(
      mat3(1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10),
      mat3()
    )
  ).toEqual(true);
  expect(
    mat3AlmostEqual(
      mat3(),
      mat3(1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10, 1e-10)
    )
  ).toEqual(true);
  expect(mat3AlmostEqual(mat3(), mat3(1e-8))).toEqual(false);
});

test("mat3Projection", () => {
  expect(mat3Projection(vec2(20, 10))).toEqual(
    mat3(0.1, 0, 0, 0, -0.2, 0, -1, 1, 1)
  );
});

test("mat3Translation", () => {
  expect(mat3Translation(vec2(3, 4))).toEqual(mat3(1, 0, 0, 0, 1, 0, 3, 4, 1));
});

test("mat3Scaling", () => {
  expect(mat3Scaling(3)).toEqual(mat3(3, 0, 0, 0, 3, 0, 0, 0, 3));
  expect(mat3Scaling(vec2(3, 4))).toEqual(mat3(3, 0, 0, 0, 4, 0, 0, 0, 1));
  expect(mat3Scaling(vec3(3, 4, 5))).toEqual(mat3(3, 0, 0, 0, 4, 0, 0, 0, 5));
});

test("mat3Rotation", () => {
  expectToAlmostEqualMat3(
    mat3Rotation(Math.PI / 2),
    mat3(0, 1, 0, -1, 0, 0, 0, 0, 1)
  );
  expectToAlmostEqualMat3(
    mat3Rotation(Math.PI),
    mat3(-1, 0, 0, 0, -1, 0, 0, 0, 1)
  );
});
