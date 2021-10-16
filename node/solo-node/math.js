function sumar (a,b){
    return a+b;
}
function restar (a,b){
    return a-b;
}
function multiplicar (a,b){
    return a*b;
}
function dividir (a,b){
    return b!==0?a/b:'no se puede dividir por 0';
}

exports.sumar=sumar;
exports.restar=restar;
