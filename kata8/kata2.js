const arreglo = [1,-4,7,12]
let myArray = []
let suma = 0

for(let i=0; i < arreglo.length; i++){
        if(arreglo[i] >= 0){
            myArray.push(arreglo[i])
        }
}

for(let i=0; i < myArray.length; i++){
    suma += myArray[i]
}

console.log(suma)

