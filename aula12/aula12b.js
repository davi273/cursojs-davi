var agora= new Date()
var hora = agora.getHours()
var min=agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${min} minutos.`)
if(hora<12){
    console.log('Boa Dia')
}else if(hora<=18){
    console.log('Boa tarde')
}else{
    console.log('Boa Noite')
}