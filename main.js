let count = 0;
let countEl = document.getElementById("count-el");
let buttons = document.querySelectorAll("button");

function increce() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  for (const button of buttons) {
    button.disabled = true;
  }
}

function reset() {
  count = 0;
  countEl.innerText = count;
}

function to_another() {
  location.href = "index2.html";
  writeFile("clicks.text", count)
}
