export function getFizzBuzz(valor: number) {
    if(isDivisibleFor(valor,3) && isDivisibleFor(valor,5)){
        return 'FizzBuzz';
    }
    if(isDivisibleFor(valor,3)){
        return 'Fizz';
    }
    if(isDivisibleFor(valor,5)){
        return 'Buzz';
    }
  return valor.toString();
}

function isDivisibleFor(valor:number,divisor:number){
    return valor % divisor === 0;
}