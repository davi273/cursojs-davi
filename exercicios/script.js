function carregar(){
var msg=window.document.getElementById('msg')
var img=window.document.getElementById('imagem')
var data=new Date()
var hora=data.getHours()
var mi=data.getMinutes()
msg.innerHTML=`Agora são ${hora}:${mi} horas.`
if(hora=0 && hora <12){
    //bom dia
    img.src='manha.png'
}else if(hora>=12 && hora<18){
//boa tarde
img.src='fototarde.png'

}else{
    //boa noite
    img.src='fotonoite.png'

}
}