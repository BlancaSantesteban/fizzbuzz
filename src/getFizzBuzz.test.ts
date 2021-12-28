import { getFizzBuzz } from "./getFizzBuzz";

describe("Get FizzBuzz", () => {
  it("el valor 1 devuelve 1", () => {
    const result = getFizzBuzz(1);

    expect(result).toEqual("1");
  });

  it("el valor 2 devuelve 2", () => {
    const result = getFizzBuzz(2);

    expect(result).toEqual("2");
  });
});
