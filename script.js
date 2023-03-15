let btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
  let amount = document.getElementById('amount').value;
  let discount = document.getElementById('discount').value;
  let span = document.querySelector('span');
  let amountNum = Number(amount);
  let discountNum = Number(discount);
  let total = (parseFloat(amountNum) * parseFloat(discountNum)) / 100;
  span.innerText = total;
});