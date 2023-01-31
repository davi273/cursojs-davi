let num=[5,6,8,321,90]
/*for(let pos =0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
//num.length comprimento
//num.sort() ordena a lista
/* num.indexOf(6)busca valores*/ 
//num.push(1) adiciona numero no final
for(let pos in num){
    console.log(num[pos])
}
let pos=num.indexOf(4)
num.push(1)
if(pos==-1){
    console.log('O valor não foi encontrado')
}else{
console.log(`O valor 8 está na posição ${pos}`)}
