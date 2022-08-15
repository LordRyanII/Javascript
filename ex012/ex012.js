var hora = 13
if(hora < 6){
    console.log(`Boa madrugada! são exatamente ${hora} horas da manhã, considere um descanso!`)
}else if(hora < 12 ){
    console.log(`Bom dia! são exatamente ${hora} horas da manhã`)
}else if(hora < 18){
    console.log(`Boa tarde! são exatamente ${hora} horas da tarde`)
}else if(hora > 18){
    console.log(`Boa noite! são exatamente ${hora} horas da noite`)
}