let brutos = [1000,1300,1500,1700,2000,2200,2800,3000];
let netos = [];
const IRPF = 15
let valor;
let FiscalAlto = [];

//Apartado A


for (let i= 0; i < brutos.length; i++) {
    console.log(brutos[i]);
    
}

//Apartado B

for (let i= 0; i < brutos.length; i++) {
    valor = brutos[i]-(brutos[i]*IRPF)/100;
    netos[i]= valor;

    console.log(netos[i]);
    
    
}

netos  = brutos.map((ele) => (ele - (ele*IRPF/100)));

console.log(netos);


FiscalAlto = brutos.filter(function (ele) {
    return ele > 1935;
})
console.log(FiscalAlto);

FiscalAlto = brutos.map(ele => ele-(ele*IRPF)/100).filter(ele => ele > 1935)

console.log(FiscalAlto);






let matriz =[[1,2,3],[4,5,6],[7,8,9]];





