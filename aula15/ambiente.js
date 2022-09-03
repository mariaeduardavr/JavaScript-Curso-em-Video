let num = [5, 8, 2, 9, 3]
num.push(1)

console.log(`O valor 5 está na posição ${num.indexOf(5)}`)

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O elemento 0 antes da ordenação é: ${num[0]}`)
console.log(`O vetor ordenado é ${num.sort()}`)
console.log(`O elemento 0 depois da ordenação é: ${num[0]}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}