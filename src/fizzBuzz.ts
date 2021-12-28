export function fizzBuzz(inicio:number, fin:number) {
    let numeros:string=inicio.toString();
    for(let i = inicio+1;i<=fin;i++){
        numeros+="\n"+i.toString();
    }
    return numeros;
}
