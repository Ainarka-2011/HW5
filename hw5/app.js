let $plus = document.getElementById("plus");
function plusCounter() {
  let coin = Number($plus.innerText);
  if (coin < 200) {
    coin += 5;
    $plus.innerText = coin;
  }
}

let $minus = document.getElementById("minus");
function minusCounter() {
  let energy = Number($minus.innerText);
  if (energy > 0) {
    energy -= 5;
    $minus.innerText = energy;
  }
}

let $hamster = document.getElementById("hamster_button");
function hamsterCounter() {
  plusCounter();
  minusCounter();
}

$hamster.addEventListener("click", hamsterCounter);
