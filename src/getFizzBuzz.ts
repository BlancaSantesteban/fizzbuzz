export function getFizzBuzz(valor: number) {
    const divisibleForThree=valor % 3=== 0;
    const divisibleForFive=valor % 5=== 0;

    if(divisibleForThree){
        return 'Fizz';
    }
    if(divisibleForFive){
        return 'Buzz';
    }
  return valor.toString();
}
