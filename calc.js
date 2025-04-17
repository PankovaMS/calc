let totalIncome = 0;
let monthlyIncome = 0;

// document.querySelectorAll('input').forEach(input => {
//     input.addEventListener('input', function() {
//       // Разрешаем только цифры, точку и запятую:
//       this.value = this.value.replace(/[^0-9.,]/g, '');
      
//       // Заменяем все запятые на точки, чтобы использовать единый разделитель:
//       this.value = this.value.replace(/,/g, '.');
  
//       // Если пользователь ввёл более одной точки, оставляем только первую:
//       let parts = this.value.split('.');
//       if (parts.length > 2) {
//         this.value = parts[0] + '.' + parts.slice(1).join('');
//       }
  
//       // Ограничиваем количество цифр после точки до двух
//       if (this.value.includes('.') && /\.\d{3,}/.test(this.value)) {
//         this.value = this.value.replace(/(\.\d{2})\d+/, '$1');
//       }
//     });
//   });
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (e) => {
        const input = e.target;
        const value = input.value.replace(/[^0-9.]/g, '');
        const match = value.match(/^\d*(\.?\d{0,2})?/);
        input.value = match?.[0] || '';
      });
  });
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