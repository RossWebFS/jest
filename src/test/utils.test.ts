// version 1

// import { toUpper } from "../app/ulils";

// describe("Utils test suite", () => {
//   test("should return uppercase", () => {
//     const result = toUpper("abc");
//     expect(result).toBe("ABC");
//   });
// });

// version after AAA proncipe

import { toUpper } from "../app/ulils";

describe("Utils test suite", () => {
  it("should return uppercase of a valid string", () => {
    const sut = toUpper;
    const expected = "ABC"

    const actual = sut("abc");

    expect(actual).toBe(expected);
  });
});
