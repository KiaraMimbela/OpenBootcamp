function Fibonacci (num) {
    let lista = [1, 1]
    for (let i = 2; i < num; i++) {
        lista.push(lista[i - 1] + lista[i - 2] )
    }
    return lista
}

console.log(Fibonacci(6))