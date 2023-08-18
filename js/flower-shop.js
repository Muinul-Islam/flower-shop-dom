let total = 0;
let discount = 0;

function handleClickedBtn(target) {
  const itemName = target.parentNode.childNodes[1].innerText;

  const li = document.createElement("li");
  li.innerText = itemName;

  const selectedItem = document.getElementById("selected-items");

  if (selectedItem.children.length >= 10) {
    alert("You Cant Order More");
    return;
  }

  selectedItem.appendChild(li);

  const price = target.parentNode.childNodes[5].innerText.split(' ')[1];
  total += parseInt(price);
  document.getElementById('total').innerText = total;

  discount = total * 0.2;
  document.getElementById('discount').innerText = discount;

  const grandTotal = total - discount;
  document.getElementById('grand-total').innerText = grandTotal;
}
