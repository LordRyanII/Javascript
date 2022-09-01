//começo do meu código

function carregar() {
    console.log('ola')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    //variavel acima para testar código
    if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'imagens/manha.250.png'
    msg.innerHTML = `Agora são ${hora} horas.
    Tenha um bom dia!`
    window.document.body.style.background= '#e49f8a'
    //img.setAttribute("src","./imagens/noite.250.png")
    } else  if(hora > 12 && hora <= 18 ){
    //Boa tarde
    msg.innerHTML= `Agora são ${hora} horas. 
    Tenha uma Boa tarde! `
    img.src = 'imagens/tarde_250.png'
    window.document.body.style.background= '#4e2320'
    } else{
    //Boa noite
    img.src = 'imagens/noite.250.png'
    msg.innerText= (`Agora são exatamente ${hora} horas. 
    Tenha uma Boa noite! `)
    window.document.body.style.background= '#201f1f'
    }
}