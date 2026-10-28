function contaCifre(numero) {
    if (numero > 9999) {
        return "Numero troppo grande";
    } else {
        return numero.toString().length + " cifre";
    }
}

console.log(contaCifre(9));      // 1 cifre
console.log(contaCifre(99));     // 2 cifre
console.log(contaCifre(999));    // 3 cifre
console.log(contaCifre(9999));   // 4 cifre
console.log(contaCifre(12000));  // Numero troppo grande





