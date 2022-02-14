// function bringSingara(taka){
//     console.log('Singara: ',taka);
//     console.log('give me a singara');
// }
// bringSingara(100);


// function bringSingara(taka){
//     console.log('Singara: ',taka);
//     console.log('give me a singara');
// }
// var money = 250;
// bringSingara(money);


function bringSingara(taka){
    console.log('Singara: ',taka);
    console.log('give me singara');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 250;
var singara = bringSingara(money);
console.log('Take Singara', singara);