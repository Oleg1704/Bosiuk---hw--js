//1 

let humburger = 4;
let fries = 1;

if(humburger >= 4 && fries >= 1 ){
    console.log('всі наїлися');
} else {
    console.log('ми йдемо в інше кафе');
}


//2

const num = 1500;

if(num > 1000 && num < 1900){
    console.log('Ціна товару знаходиться між 1000 та 1900 включно');
} 

//3.

const price = 700;

if(price !== 1000 || price !== 1900){
    console.log('Ціна товару не знаходиться між 1000 та 1900 включно');
}

const price1 = '';

if(price1 < 1000 || price1 > 1900){
    console.log('Ціна товару не знаходиться між 1000 та 1900 включно');
}

// 4.

const seasonIndex = 0;

if (seasonIndex === 0){
    console.log('now is winter');
} else if (seasonIndex === 1){
    console.log('now is spring');
} else if (seasonIndex === 2){
    console.log('now is summer');
} else if (seasonIndex === 3){
    console.log('now is autumn')
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

const numb = 1;

switch(numb){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        consolelog('Saturday');
        break;
    case 7:
        console.log('Sunday');
}

// 7.

const n = '+';
const x = 5, y = 2

switch(n){
    case '+': z = x + y;
    console.log(z);
        break;
    case '-': z = x - y;
    console.log(z);
        break;
    case '*': z = x * y;
    console.log(z);
        break;
    case '/': z = x / y;
    console.log(z);
        break;
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
console.log(convertFromMetresToKilometres(4))