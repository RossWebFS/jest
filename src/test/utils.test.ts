import { getStringInfo, toUpper } from "../app/ulils";

// version 1

// describe("Utils test suite", () => {
//   test("should return uppercase", () => {
//     const result = toUpper("abc");
//     expect(result).toBe("ABC");
//   });
// });

// version after AAA proncipe

// describe("Utils test suite", () => {
//   it("should return uppercase of a valid string", () => {
//     const sut = toUpper;
//     const expected = "ABC";

//     const actual = sut("abc");

//     expect(actual).toBe(expected);
//   });
// });

// version after AAA proncipe and params refactoring

describe("Utils test suite", () => {
  it.each([
    { input: "abc", expected: "ABC" },
    { input: "My-String", expected: "MY-STRING" },
  ])("$input toUpperCase should be $expected", ({ input, expected }) => {
    const actual = toUpper(input);
    expect(actual).toBe(expected);
  });
});

//   it("should return info for valid string", () => {
//     const actual = getStringInfo("My-String");

//     expect(actual.lowerCase).toBe("my-string");
//     expect(actual.extraInfo).toEqual({});
//     expect(actual.characters.length).toBe(9);
//     expect(actual.characters).toHaveLength(9);
//     expect(actual.characters).toEqual([
//       "M",
//       "y",
//       "-",
//       "S",
//       "t",
//       "r",
//       "i",
//       "n",
//       "g",
//     ]);
//     expect(actual.characters).toContain<string>("M");
//     expect(actual.characters).toEqual(
//       expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
//     );
//     expect(actual.extraInfo).not.toBe(undefined);
//     expect(actual.extraInfo).not.toBeUndefined();
//     expect(actual.extraInfo).toBeDefined();
//     expect(actual.extraInfo).toBeTruthy();
//   });
// });

describe("getStringInfo for arg My-String should", () => {
  test("return right length", () => {
    const actual = getStringInfo("My-String");
    expect(actual.characters).toHaveLength(9);
  });
  test("return right lower case", () => {
    const actual = getStringInfo("My-String");
    expect(actual.lowerCase).toBe("my-string");
  });
  test("return right upper case", () => {
    const actual = getStringInfo("My-String");
    expect(actual.upperCase).toBe("MY-STRING");
  });
  test("return right characters", () => {
    const actual = getStringInfo("My-String");
    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
    expect(actual.characters).toContain<string>("M");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
    );
  });
  test("return defined extra info", () => {
    const actual = getStringInfo("My-String");
    expect(actual.extraInfo).toBeDefined();
  });

  test("return right extra info", () => {
    const actual = getStringInfo("My-String");
    expect(actual.extraInfo).toEqual({});
  });
});
