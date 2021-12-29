import { getFizzBuzz } from './getFizzBuzz';

export function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    console.log(getFizzBuzz(i));
  }
}
