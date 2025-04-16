let totalIncome = 0;
let monthlyIncome = 0;

function calc () {
    let month = Number(document.querySelector('#months').value, 10);
    let rate  = Number(document.querySelector('#rate').value, 10);
    let sum   = Number(document.querySelector('#sum').value, 10);
// валидация
if (isNaN(month) || month < 1 || month > 120) {
    alert("Срок вклада должен быть от 1 до 120 месяцев.");
    return;
  }

  if (isNaN(rate) || rate < 1 || rate > 40) {
    alert("Процентная ставка должна быть от 1 до 40 %.");
    return;
  }  

  if (isNaN(sum) || sum < 1000 || sum > 10000000) {
    alert("Сумма вклада должна быть от 1000 до 10000000.");
    return;
  }


    if (sum > 0) {
        monthlyIncome = sum * rate / 100 / 12;
        totalIncome = sum * Math.pow((1 + rate / 100 / 12), month);
    }
    if (sum >= 1400000) {
        alert('Осторожно: вклад не застрахован государством!');
      }
    console.log(monthlyIncome, totalIncome);

    document.querySelector('#totalIncome').innerHTML = `${totalIncome.toFixed(2)} рублей`;
    document.querySelector('#monthlyIncome').innerHTML = `${monthlyIncome.toFixed(2)} рублей`;
    
}
document.querySelector("button").addEventListener('click', calc);