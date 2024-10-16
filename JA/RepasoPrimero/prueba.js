let lista = [1,2,3,4,5];
let otra = ["uno", "dos", true];
let res = lista.concat(otra);


console.log(res.length);
res.push("flipao"); //mete valores en el array al final 

res.unshift ("por delante"); //mete valores en el array por delante
let ultimo = res.pop();
ultimo = res.shift();
res.reverse();
let salida = res.join("-");
let edad=33;
function mayorEdad(edad){
    return edad >  8;
}
let ok = res.some(mayorEdad);
console.log(ok)
console.log(salida)
console.log(res);


//Spread operator

let lista2 = [1,2,3,4,5];
let otra2 = [...lista2];
otra2[0] = 67;
console.log(lista2);
let a,b,c;
let lista3 = [22,45,67];
[a,b,c] = lista3;

console.log(a);
console.log(b);
console.log(c );



