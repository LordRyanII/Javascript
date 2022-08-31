//começo do meu código


function clicar(){
    console.log('ola')
    var email = window.document.getElementById('#e-mail');
    var password = window.document.getElementById('#senha');
    var array = [
        'ryanoliveiram2015@gmail.com',
        'renata.gremio123@outlook.com',
        'adriel.devolops@yahoo.com',
    ];
    //condições
    if(email === null){
        window.alert('e-mail incorreto')
    } else if(email =! array){
        window.alert(`você confirma esse e-mail ${email}` )
    }
}
/*
trabalhar futuramente aqui com arrays
*/