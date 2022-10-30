let count = 0;
let countEl = document.getElementById("count-el");
let buttons = document.querySelectorAll("button");
let speed = document.getElementById("clInMin")
let speed2 = document.getElementById("clInMin2")
queue = [];


function increce() {
  count += 1;
  countEl.innerText = count;

  const d = new Date();
  let time = d.getTime();   //curent time at curent click
  queue.push(time);         //adds new time item to the end of an array
  if (queue.length > 5){
      queue.shift();
      speed.innerText = Math.round( 4000 /(queue[4] - queue[0]) * 10) / 10;}

    
  }

function reset() {
  count = 0;
  countEl.innerText = count;
  document.querySelector('#save').disabled = false;
  document.querySelector('#increace').disabled = false;
}

function save() {
  download("result.txt", count);
  document.querySelector('#save').disabled = true;
  document.querySelector('#increace').disabled = true;
}

function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);

  pom.style.display = 'none';
  document.body.appendChild(pom);

  pom.click();

  document.body.removeChild(pom);

 

}