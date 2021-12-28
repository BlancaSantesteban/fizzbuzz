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

  it("el valor 4 devuelve 4", () => {
    const result = getFizzBuzz(4);

    expect(result).toEqual("4");
  });

  it("el valor 3 devuelve Fizz", () => {
    const result = getFizzBuzz(3);

    expect(result).toEqual("Fizz");
  });
  it("el valor 6 devuelve Fizz", () => {
    const result = getFizzBuzz(6);

    expect(result).toEqual("Fizz");
  });
  it("el valor 9 devuelve Fizz", () => {
    const result = getFizzBuzz(9);

    expect(result).toEqual("Fizz");
  });
  it("el valor 27 devuelve Fizz", () => {
    const result = getFizzBuzz(27);

    expect(result).toEqual("Fizz");
  });
  it("el valor 12 devuelve Fizz", () => {
    const result = getFizzBuzz(12);

    expect(result).toEqual("Fizz");
  });
  it("el valor 5 devuelve Buzz", () => {
    const result = getFizzBuzz(5);

    expect(result).toEqual("Buzz");
  });
  it("el valor 10 devuelve Buzz", () => {
    const result = getFizzBuzz(10);

    expect(result).toEqual("Buzz");
  });
  
  it("el valor 20 devuelve Buzz", () => {
    const result = getFizzBuzz(20);

    expect(result).toEqual("Buzz");
  });
});
