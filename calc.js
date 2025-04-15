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
// валидация
    if (isNaN(month) || month < 1 || month > 120 || !Number.isInteger(month)) {
        alert("Срок вклада должен быть от 1 до 120 месяцев.");
        return;
      }

    if (isNaN(rate) || rate < 1 || rate > 40 || !Number.isInteger(rate)) {
        alert("Процентная ставка должна быть от 1 до 40 %.");
        return;
    }  

    if (isNaN(sum) || sum < 1000 || sum > 10000000 || !Number.isInteger(sum)) {
        alert("Сумма вклада должна быть от 1000 до 10000000.");
        return;
    }

    if (sum > 0) {
       monthlyIncome = sum * rate / 100 / 12;
       totalIncome = sum * (1 + rate / 100 / 12) ** month;
    }
    if (sum >= 1400000) {
        alert('Осторожно: вклад не застрахован государством!');
    }
    console.log(monthlyIncome, totalIncome);

    document.querySelector('#totalIncome').innerHTML = `${totalIncome.toFixed(2)} рублей`;
    document.querySelector('#monthlyIncome').innerHTML = `${monthlyIncome.toFixed(2)} рублей`;
    
}
document.querySelector("button").addEventListener('click', calc);