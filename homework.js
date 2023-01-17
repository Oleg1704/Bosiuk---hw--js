//1 гамбургерів та картоплі вистачає

let humburger = 3;
let fries = 3;

if(humburger && fries){
    console.log('я наївся');
}
console.log(humburger && fries);

//гамбургерів та картоплі не вистачає

let humburger1 = 2;
let fries1 = 1;

if(humburger1 || fries1){
    console.log('ми йдемо в інше кафе');
}
console.log(humburger1 || fries1)

//2

const num = 1000;
const num1 = 1900;
const cost1 = 1500

if(num < cost1){
    console.log('cost more than 1000');
} if (num1 > cost1){
    console.log('cost less than 1900');
} else {
    console.log('true')
}

//3.
 
const number = 1000;
const number1 = 1900;
const cost = 2000;
const cost2 = 500;

if(number !== cost2){
    console.log('less than 1000');
} if (number1 !== cost){
    console.log('more then 1900');
}else {
    console.log('cost less than 1000 and more than 1900');
}

const numberOne = 1000;
const numberTwo = 1900;
const costOne = 2000;
const costTwo = 500;

if(numberOne > costTwo){
    console.log('less than 1000');
} if (numberOne < costOne){
    console.log('more then 1900');
}else {
    console.log('cost less than 1000 and more than 1900');
}

// 4.

const seasonIndex = 1;

if (seasonIndex === 0){
    console.log('now is autumn');
} else if (seasonIndex === 1){
    console.log('now is winter');
} else if (seasonIndex === 2){
    console.log('now is spring');
} else if (seasonIndex === 3){
    console.log('now is summer')
} else {
    console.log('now is something else')
} 

// 5.

const a = 3;
const b = 1;
const c = 2;

if ( (a < b && c > b || b > c && b <a) ){
    console.log(b);
} else if( (b < a && c > a || a >c && b > a) ){
    console.log(a);
} else if( (c > a && b > c || a >c && c > b) ){
    console.log(c)
}else {
    console.log('some result')
}

// 6.

const numb = 3;

switch(numb){
    case '3':
        console.log('3');
        break;
    case '5':
        console.log('5');
        break;
    default:
        console.log('number of week 3');
        break;
}

// 7.

const n = 2;

switch(n){
    case 2:
        console.log(n + 10);
        
    case 2:
        console.log(10 / n);
        
    case 2:
        console.log(n * 10);
        
    case 2:
        console.log(10 - n);  
}


// 8.

function replaceConsonants (str) {
    const lettersPattern = /[аеєиіїоуюя]/gi
    return str.replace(lettersPattern, '')
} console.log(replaceConsonants)

// 9.

function getCorrectEnding (size, prefix = '') {
    const lastDigits = size.toString().slice(-2).split('');

    const lastDigit = lastDigits[lastDigits.length - 1];

    if (lastDigits.length === 2 && lastDigits[0] === '1') {
        return prefix + 'метрів'
    }

    if (lastDigit === '1') {
        return prefix + 'метр'
    }

    if (['2','3','4'].includes(lastDigit)) {
        return prefix + 'метри'
    }

    return prefix + 'метрів'
}

function convertFromMetresToKilometres (m) {
    const km = m / 1000;
    return m + ' ' + getCorrectEnding(m) + ' - це ' + km + ' ' + getCorrectEnding(km, 'кіло')
}
console.log(convertFromMetresToKilometres)