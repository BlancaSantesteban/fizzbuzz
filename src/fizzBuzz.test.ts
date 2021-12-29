import * as getFizzBuzz from './getFizzBuzz';
import { fizzBuzz } from './fizzBuzz';

describe('FizzBuzz', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calcula el resultado para el valor 1', () => {
    jest.spyOn(getFizzBuzz, 'getFizzBuzz');

    fizzBuzz();

    expect(getFizzBuzz.getFizzBuzz).toHaveBeenCalledWith(1);
  });

  it('calcula el resultado para el valor 2', () => {
    jest.spyOn(getFizzBuzz, 'getFizzBuzz');

    fizzBuzz();

    expect(getFizzBuzz.getFizzBuzz).toHaveBeenCalledWith(2);
  });

  it('calcula el resultado para el valor 3', () => {
    jest.spyOn(getFizzBuzz, 'getFizzBuzz');

    fizzBuzz();

    expect(getFizzBuzz.getFizzBuzz).toHaveBeenCalledWith(3);
  });

  it('calcula el resultado de 100 valores', () => {
    jest.spyOn(getFizzBuzz, 'getFizzBuzz');

    fizzBuzz();

    expect(getFizzBuzz.getFizzBuzz).toHaveBeenCalledTimes(100);
  });

  it('informa al usuario de la secuencia Fizz Buzz', () => {
    jest.spyOn(console, 'log').mockReturnValue(null);

    fizzBuzz();

    expect(console.log).toHaveBeenCalledWith('Fizz');
  })
});
