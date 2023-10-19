var kaina = (prompt("Iveskite prekes kaina: ")) 
var pvm = (kaina * 0.21)

console.log("Prekes kaina su PVM: " + kaina + "$")

console.log("PVM: " + pvm.toFixed(2) + "$")

console.log("Prekes kaina be PVM: " + (kaina - pvm).toFixed(2) + "$")

