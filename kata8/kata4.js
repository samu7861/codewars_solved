const x = "ho la per ri"
let resultado = ""


const DeleteSpace = (x) => {
    for(let i=0; i < x.length; i++){
        if(x[i] !== " "){
            resultado += x[i]
        }
    }
    return resultado
}

console.log(DeleteSpace(x))