export function getFizzBuzz(valor: number) {
  const isFizz = valor % 3 === 0;
  const isBuzz = valor % 5 === 0;

  if (isFizz && isBuzz) {
    return 'FizzBuzz';
  }
  if (isFizz) {
    return 'Fizz';
  }
  if (isBuzz) {
    return 'Buzz';
  }
  return valor.toString();
}
