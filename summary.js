var skyColor = 'blue';

var phones = ['iphone', 'Xiaomi', 'Samsung', 'lg', 'HTC'];

phones[3] = 'walton';


// check an Element not exist in an array
if(phones.indexOf('oppo') == -1){
    console.log('Oppo is missing');
}

//check an element exist in an array
if(phones.indexOf('lg') != -1){
    console.log('lg is available now');
}


//loop
var num = 0;
while(num <= 10){
    i++;
}

for(var i = 0; i < phones.length; i++){

}

//function
function addThreeNumbers(number1, number2, number3){
    var total = number1 + number2+ number3;
    return total;
}

addThreeNumbers(31, 45, 87);

//object 
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: 'blue'
};