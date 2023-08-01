function repeated(n,s) {
    nInt = parseInt(n)
    let resultado = ""

    for(let i=0; i<nInt; i++){
        resultado += s
    }

    return resultado
 }


console.log(repeated(25, "holaprimito"))