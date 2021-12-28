export function fizzBuzz(inicio:number, fin:number) {
    let output:string=inicio.toString();

    for(let i = inicio+1;i<=fin;i++){
        
        if(isMultiple(i,3) && isMultiple(i,5)  || (hasString(i,'3') && hasString(i,'5'))){
            output+="\n"+"FizzBuzz";
        }
        else if(isMultiple(i,3) || hasString(i,'3')){
            output+="\n"+"Fizz";
        }
        else if(isMultiple(i,5)|| hasString(i,'5')){
            output+="\n"+"Buzz";
        }
        else{
            output+="\n"+i.toString();
        }
    }
    return output;
}

function isMultiple (number:number, multiple:number) {
	return number % multiple === 0;
}

function hasString (numero:number, caracter:string) {
	return numero.toString().includes(caracter);
}