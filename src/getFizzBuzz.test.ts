import { getFizzBuzz } from "./getFizzBuzz";

describe("Get FizzBuzz", () => {
  it("el valor 1 devuelve 1", () => {
    const result = getFizzBuzz(1);

    expect(result).toEqual("1");
  });
});
