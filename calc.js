// Формула сложных процентов:
// A = P * (1 + r/100/12)^(termInMonths)
// где:
//  - P – начальная сумма вклада (principal),
//  - r – годовая процентная ставка (interestRate),
//  - termInMonths – срок вклада в месяцах.
 
// Рассчитываем итоговую сумму A, затем общий доход (totalIncome = A - P)
// и средний доход в месяц (monthlyIncome = (A - P) / termInMonths).

let totalIncome = 0;
let monthlyIncome = 0;

function calc () {
    let month = parseFloat(document.querySelector('#months').value);
    let rate = document.querySelector('#rate').value;
    let sum = parseFloat(document.querySelector('#sum').value);

    if (sum > 0) {
       monthlyIncome = sum * rate / 100 / 12;
       totalIncome = sum * (1 + rate / 100 / 12) ** month;
    }
    if (sum >= 1400000) {
        alert('Осторожно: вклад не застрахован государством!');
        return;
    }
    console.log(monthlyIncome, totalIncome);

    document.querySelector('#totalIncome').innerHTML = `${totalIncome.toFixed(2)} рублей`;
    document.querySelector('#monthlyIncome').innerHTML = `${monthlyIncome.toFixed(2)} рублей`;
    
}
document.querySelector("button").addEventListener('click', calc);