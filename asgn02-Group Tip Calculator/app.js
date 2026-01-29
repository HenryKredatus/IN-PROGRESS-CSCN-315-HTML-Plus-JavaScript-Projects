// ===== Element references =====
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const totalPerPersonEl = document.getElementById("totalPerPerson");

// ===== Event listeners =====
billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

// ===== Functions =====
function calculateTip() {
  const billAmount = Number(billInput.value);
  const tipPercent = Number(tipInput.value);
  const numberOfPeople = Number(peopleInput.value);

  if (billAmount <= 0 || tipPercent < 0 || numberOfPeople <= 0) {
    totalPerPersonEl.textContent = "$0.00";
    return;
  }

  const tipAmount = billAmount * (tipPercent / 100);
  const totalAmount = billAmount + tipAmount;
  const totalPerPerson = totalAmount / numberOfPeople;

  totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`;
}
