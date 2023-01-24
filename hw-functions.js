//1 
function isFoodEnough (hamburger, fries) {
    if(hamburger >= 4 && fries >= 1 ){
      console.log('всі наїлися');
    } else {
      console.log('ми йдемо в інше кафе');
    }
  }
  
  isFoodEnough(4, 1) 
  isFoodEnough(4, 0)

//2

function someNum (num){
if(num > 1000 && num < 1900){
    console.log('Ціна товару знаходиться між 1000 та 1900 включно');
}
}
someNum(1500)

//3.

function somePrice(price){
    if(!(price >= 1000 && price <= 1900)){
      console.log('Ціна товару не знаходиться між 1000 та 1900 включно');
    }
  }
  somePrice(700)


  function somePrice(price){
    if(price < 1000 && price > 1900){
      console.log('Ціна товару не знаходиться між 1000 та 1900 включно');
    }
  }
  somePrice(700)

// 4.


function season(seasonIndex){
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
}
season(0)

// 5.

function averageNumber(a, b, c) {
    if ( (a < b && c > b) || (b > c && b < a) ){
        console.log(b);
    } else if( (b < a && c > a) || (a >c && b > a) ){
        console.log(a);
    } else if( (c > a && b > c) || (a >c && c > b) ){
        console.log(c)
    }else {
        console.log('some result')
    }
    }
    averageNumber(3, 1, 2)

// 6.


function numDays(numb) {
switch(numb){
    case 1:
        console.log('Monday');
        return;
    case 2:
        console.log('Tuesday');
        return;
    case 3:
        console.log('Wednesday');
        return;
    case 4:
        console.log('Thursday');
        return;
    case 5:
        console.log('Friday');
        return;
    case 6:
        consolelog('Saturday');
        return;
    case 7:
        console.log('Sunday');
}
}
numDays(7)


// 7.

function mathematicalCalculations(n, x, y) {
    switch(n){
        case '+':
        console.log( x + y);
            return;
        case '-':
        console.log(x - y);
            return;
        case '*':
        console.log(x * y);
            return;
        case '/':
        console.log(x / y);
            return;
    }
    }
    mathematicalCalculations('+', 5, 2)


// 8.

function replaceConsonants (str) {
    const lettersPattern = /[аеєиіїоуюя]/gi
    return str.replace(lettersPattern, '')
} console.log(replaceConsonants)

// 9.

function getCorrectEnding (size, prefix = '') {
    const lastDigits = size.toString().slice(-2).split('');

    const lastDigit = lastDigits[lastDigits.length - 1];

    if (size <= 1) {
        return prefix + 'метра'
    }

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