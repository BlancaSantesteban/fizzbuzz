export function fizzBuzz(inicio:number, fin:number) {
    let numeros:string=inicio.toString();
    for(let i = inicio+1;i<=fin;i++){
        if(i%3==0 && i%5==0){
            numeros+="\n"+"FizzBuzz";
        }
        else if(i%3==0){
            numeros+="\n"+"Fizz";
        }
        else if(i%5==0){
            numeros+="\n"+"Buzz";
        }
        else{
            numeros+="\n"+i.toString();
        }
    }
    return numeros;
}
