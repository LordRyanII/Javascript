let num = [8, 2 , 4 , 10] //Array convencional
console.log(num) //metodo de vizualização no console, node.js
console.log(` Eu tenho as seguintes arrays ${num} e posso coloca-las em ordens ${num.sort()}. A minha Array possuí ${num.length} Elementos`)

/*dicionário:

- .sort()  === Coloca a lista em ordem crescente
- .length === Multiplas formas de uso, pode contar valores(Quantos numeros tem na lista(Array))

//Filtros comuns:

nome da minha variavel composta.[3] = 6
acrescenta valor na posição de número 3, e o valor que eu definir

nome da minha variavel composta.push(8)
acrescenta valor na última posição, e o valor que eu definir


*/

//Loop nada convencional:

console.log(`Minha variavél na posição 0 é ${num[0]}`)
console.log(`Minha variavél na posição 0 é ${num[1]}`)
console.log(`Minha variavél na posição 0 é ${num[2]}`)
console.log(`Minha variavél na posição 0 é ${num[3]}`)

//Loops lógicos


for(let pos= 0; pos< num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}//metódo padrão

for(let pos in num){
    console.log(`O número ${pos} equivale a ${num[pos]}`)
}//metódo novo, mas simples




