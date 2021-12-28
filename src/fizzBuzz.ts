export function fizzBuzz(inicio:number, fin:number,fizzBuzz:boolean) {
    let output:string=inicio.toString();
    for(let i = inicio+1;i<=fin;i++){
        if(fizzBuzz){
            output=getFizzBuzz(i,output);
        }
        else{
            output+="\n"+i.toString();
        }
    }
    return output;
}
function getFizzBuzz(i:number,result:string){
   
    if(isMultiple(i,3) && isMultiple(i,5)  || (hasString(i,'3') && hasString(i,'5'))){
        result+="\n"+"FizzBuzz";
    }
    else if(isMultiple(i,3) || hasString(i,'3')){
        result+="\n"+"Fizz";
    }
    else if(isMultiple(i,5)|| hasString(i,'5')){
        result+="\n"+"Buzz";
    }
    else{
        result+="\n"+i.toString();
    }
    return result;
}

function isMultiple (number:number, multiple:number) {
	return number % multiple === 0;
}

function hasString (numero:number, caracter:string) {
	return numero.toString().includes(caracter);
}