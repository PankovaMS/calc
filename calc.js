let totalIncome = 0;
let monthlyIncome = 0;

function limitInput(selector, pattern) {
  document.querySelector(selector).addEventListener('input', (e) => {
    const input = e.target;
    const value = input.value.replace(/[^0-9.]/g, '');
    const match = value.match(pattern);
    input.value = match?.[0] || '';
  });
}

limitInput('#months', /^\d{1,3}/);  // до 3 цифр
limitInput('#rate', /^\d{1,2}(\.\d{0,2})?/);    // до 2 цифр + до 2 после точки
limitInput('#sum', /^\d{0,8}/);                 // 4–8 цифр
function calc () {
    let month = Number(document.querySelector('#months').value);
    let rate  = Number(document.querySelector('#rate').value);
    let sum   = Number(document.querySelector('#sum').valueы);
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
        monthlyIncome = (totalIncome - sum) / month;
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