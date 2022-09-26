//start_my_code

function clickou(){
    
let number_1 = window.document.getElementById('input_box_1');
let number_2 = window.document.getElementById('input_box_2');
let number_3 = window.document.getElementById('input_box_3');
let res = window.document.getElementById('res');
let img=  window.document.getElementById('img');

    if (number_1.value.length == 0 || number_2.value.length == 0 || number_3.value.length == 0) {
        window.alert('[Erro] falta alguns dados')
    } else{
        res.innerHTML = 'Contando...'
    }

    let inicio = Number(number_1.value) //inicio
    let fim = Number(number_2.value) // fim
    let passo = Number(number_3.value) // passo

    for(let c = inicio ; c <= fim; c += passo){
        res.innerHTML += `${c}`
        img.setAttribute("src", 'carimbo-de-borracha-não-terminado-83440416.jpg')
            img.style.width = '55px'
            img.style.height = '55px'
            //alert('Não terminado, volto em breve!')
         if (c > 50){
            res.style.height = '300px';
            res.setAttribute('class', 'res')
            
        }
    }

}

