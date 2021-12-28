export function fizzBuzz(inicio:number, fin:number) {
    let numeros:string=inicio.toString();
    for(let i = inicio+1;i<=fin;i++){
        if(i%3==0 && i%5==0  || (i.toString().includes('3') && (i.toString().includes('5')))){
            numeros+="\n"+"FizzBuzz";
        }
        else if(i%3==0 || (i.toString()).includes('3')){
            numeros+="\n"+"Fizz";
        }
        else if(i%5==0|| (i.toString()).includes('5')){
            numeros+="\n"+"Buzz";
        }
        else{
            numeros+="\n"+i.toString();
        }
    }
    console.log(numeros)
    return numeros;
}