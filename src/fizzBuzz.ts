export function fizzBuzz(inicio:number, fin:number) {
    let numeros:string=inicio.toString();
    for(let i = inicio+1;i<=fin;i++){
        if(isMultiple(i,3) && isMultiple(i,5)  || (containString(i,'3') && containString(i,'5'))){
            numeros+="\n"+"FizzBuzz";
        }
        else if(isMultiple(i,3) || containString(i,'3')){
            numeros+="\n"+"Fizz";
        }
        else if(isMultiple(i,5)|| containString(i,'5')){
            numeros+="\n"+"Buzz";
        }
        else{
            numeros+="\n"+i.toString();
        }
    }
    return numeros;
}

function isMultiple (number:number, multiple:number) {
	return number % multiple === 0;
}

function containString (numero:number, caracter:string) {
	return numero.toString().includes(caracter);
}