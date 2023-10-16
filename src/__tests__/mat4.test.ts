import {
  Mat4,
  mat4,
  mat4Add,
  mat4AlmostEqual,
  mat4Clone,
  mat4Determinant,
  mat4Equal,
  mat4Identity,
  mat4Invert,
  mat4Mult,
  mat4Scale,
  mat4Sub,
  mat4Transpose,
} from "..";

const expectToAlmostEqualMat4 = (target: Mat4, expected: Mat4) => {
  expect(mat4AlmostEqual(target, expected)).toEqual(true);
};

test("mat4", () => {
  expect(mat4()).toEqual(mat4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
  expect(mat4(1)).toEqual(mat4(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
  expect(mat4(1, 2)).toEqual(
    mat4(1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3)).toEqual(
    mat4(1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4)).toEqual(
    mat4(1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 0, 0, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0)
  );
  expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)).toEqual(
    mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
  );
  expect(
    mat4(-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16)
  ).toEqual(
    mat4(-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16)
  );
});

test("mat4Clone", () => {
  expect(
    mat4Clone(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16))
  ).toEqual(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16));
});

test("mat4Identity", () => {
  expect(mat4Identity()).toEqual(
    mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  );
});

test("mat4Determinant", () => {
  expect(mat4Determinant(mat4())).toEqual(0);
  expect(mat4Determinant(mat4Identity())).toEqual(1);
  expect(
    mat4Determinant(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16))
  ).toEqual(0);
  expect(
    mat4Determinant(
      mat4(7, 13, 5, 9, 10, 4, 2, 29, 19, 17, 6, 11, 20, 3, 12, 14)
    )
  ).toEqual(-39199);
});

test("mat4Transpose", () => {
  expect(mat4Transpose(mat4Identity())).toEqual(mat4Identity());
  expect(
    mat4Transpose(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16))
  ).toEqual(mat4(1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16));
});

test("mat4Invert", () => {
  expectToAlmostEqualMat4(mat4Invert(mat4Identity())!, mat4Identity());

  const m = mat4(1, 0, 2, 2, 0, 2, 1, 0, 0, 1, 0, 1, 1, 2, 1, 4);
  expectToAlmostEqualMat4(mat4Mult(m, mat4Invert(m)!), mat4Identity());
  expectToAlmostEqualMat4(mat4Mult(mat4Invert(m)!, m), mat4Identity());

  expect(
    mat4Invert(mat4(0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1))
  ).toEqual(null);
});

test("mat4Add", () => {
  expect(mat4Add(mat4Identity(), mat4Identity())).toEqual(
    mat4(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2)
  );
  expect(
    mat4Add(
      mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16),
      mat4(16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
    )
  ).toEqual(
    mat4(17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17)
  );
});

test("mat4Sub", () => {
  expect(mat4Sub(mat4Identity(), mat4Identity())).toEqual(
    mat4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  );
  expect(
    mat4Sub(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16), mat4())
  ).toEqual(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16));
  expect(
    mat4Sub(mat4(), mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16))
  ).toEqual(
    mat4(-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16)
  );
});

test("mat4Mult", () => {
  expect(mat4Mult()).toEqual(mat4Identity());

  expect(mat4Mult(mat4Identity())).toEqual(mat4Identity());

  expect(mat4Mult(mat4Identity(), mat4Identity())).toEqual(mat4Identity());

  expect(mat4Mult(mat4Identity(), mat4Identity(), mat4Identity())).toEqual(
    mat4Identity()
  );

  expect(
    mat4Mult(
      mat4(5, 0, 3, 1, 2, 6, 8, 8, 6, 2, 1, 5, 1, 0, 4, 6),
      mat4(7, 1, 9, 5, 5, 8, 4, 3, 8, 2, 3, 7, 0, 6, 8, 9)
    )
  ).toEqual(
    mat4(96, 24, 58, 90, 68, 56, 95, 107, 69, 18, 71, 81, 69, 52, 92, 142)
  );

  expect(
    mat4Mult(
      mat4(5, 2, 18, 15, 7, 3, 10, 4, 9, 13, 12, 24, 10, 8, 14, 6),
      mat4(23, 32, 29, 33, 20, 31, 21, 35, 22, 34, 42, 39, 38, 36, 41, 40)
    )
  ).toEqual(
    mat4(
      930,
      783,
      1544,
      1367,
      856,
      686,
      1412,
      1138,
      1116,
      1004,
      1786,
      1708,
      1211,
      1037,
      2096,
      1938
    )
  );

  expect(
    mat4Mult(
      mat4(5, 2, 18, 15, 7, 3, 10, 4, 9, 13, 12, 24, 10, 8, 14, 6),
      mat4(23, 32, 29, 33, 20, 31, 21, 35, 22, 34, 42, 39, 38, 36, 41, 40),
      mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
    )
  ).toEqual(
    mat4(
      10834,
      9315,
      18110,
      16519,
      27286,
      23355,
      45462,
      41123,
      43738,
      37395,
      72814,
      65727,
      60190,
      51435,
      100166,
      90331
    )
  );
});

test("mat4Scale", () => {
  expect(mat4Scale(3)).toEqual(
    mat4(3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3)
  );
  expect(
    mat4Scale(2, mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16))
  ).toEqual(mat4(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32));
});

test("mat4Equal", () => {
  expect(mat4Equal(mat4(), mat4())).toEqual(true);
  expect(
    mat4Equal(
      mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16),
      mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
    )
  ).toEqual(true);
  expect(
    mat4Equal(
      mat4(
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10
      ),
      mat4()
    )
  ).toEqual(false);
  expect(
    mat4Equal(
      mat4(),
      mat4(
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10
      )
    )
  ).toEqual(false);
});

test("mat4AlmostEqual", () => {
  expect(mat4AlmostEqual(mat4(), mat4())).toEqual(true);
  expect(
    mat4AlmostEqual(
      mat4(
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10
      ),
      mat4()
    )
  ).toEqual(true);
  expect(
    mat4AlmostEqual(
      mat4(),
      mat4(
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10,
        1e-10
      )
    )
  ).toEqual(true);
  expect(mat4AlmostEqual(mat4(), mat4(1e-8))).toEqual(false);
});
