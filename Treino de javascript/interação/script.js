//começo do meu código

function verificar() {
    //window.alert('Funcionou!')
    var data = new Date()
    //variavél para pegar os 4 digitos do ano do sistema
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano')
    var res = window.document.getElementById('res')
    if( fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique o ano digitado e tente novamente')
    } else{
        window.confirm('[Sucesso] clique em "ok", para ver os resultados abaixo!')
        var fsex = window.document.getElementsByName('radsex')
        //Nos radius ele não pega por id, só "name".
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        //cria uma tag html com javascript
        img.setAttribute("id", 'foto')
        //complementa a tag img criada, com o id "foto"!
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 5){
                //Bebê
                img.setAttribute("src", 'imagens/bebemasculino.png')
            }else if (idade > 5 && idade < 10){
                //Criança
                img.setAttribute("src", 'imagens/criancamasculino.png')
            } else if( idade > 10 && idade < 20){
                //jovem
                img.setAttribute("src", 'imagens/jovemmasculino.png')
            } else if (idade > 20 && idade < 50){
                //adulto
                img.setAttribute("src", 'imagens/adultomasculino.png')
            } else if(idade >= 50){
                //idoso
                img.setAttribute("src", 'imagens/velhomasculino.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
        } if(idade >= 0 && idade < 5){
            //bebê
            img.setAttribute("src", 'imagens/bebefeminino.png')
        } else if(idade > 5 && idade < 10){
            //Criança
            img.setAttribute("src", 'imagens/criancafeminina.png')
        } else if(idade > 10 && idade < 20){
            //jovem
            img.setAttribute("src", 'imagens/jovemmulher.png')
        } else if(idade > 20 && idade < 50){
            //adulto
            img.setAttribute("src", 'imagens/mulheradulta.png')
        } else if(idade >= 50){
            //idoso
            img.setAttribute("src", 'imagens/velhamulher.png')
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}