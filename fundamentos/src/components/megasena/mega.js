export const gerarNumeroNaoContido = (min, max, array) => {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
}

export  const gerarNumeros = (qtd) => {
    const numeros = Array(qtd)
        .fill(0)
        .reduce( nums => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        },[])

    return numeros.sort((a, b) => a-b )
}


/* 

Resolução Abraão 

export function gerarNumeros(qtd){
    const numeros = []
    let num = 0

    for(let i = 0; i < qtd; i++){
        num = parseInt(Math.random()*(60 - 1) + 1)
        if (numeros.indexOf(num) === -1 ){
            numeros.push(num)
        }else {
            i--
        }
    }
    
    return numeros.sort((a,b)=> a-b)
}
*/
