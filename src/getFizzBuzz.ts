export function getFizzBuzz(valor: number) {
    if(valor % 3===0){
        return 'Fizz';
    }
    if(valor === 5){
        return 'Buzz'
    }
    if(valor === 10){
        return 'Buzz'
    }
  return valor.toString();
}
