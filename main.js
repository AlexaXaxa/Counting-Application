let count = 0;
let countEl = document.getElementById("count-el");
let buttons = document.querySelectorAll("button");
let speed = document.getElementById("clInMin")
let speed2 = document.getElementById("clInMin2")
queue = [];
var N = 5;


function increce() {
  count += 1;
  countEl.innerText = count;

  let d = new Date();
  
  let time = d.getTime();   //curent time at curent click
  queue.push(time);         //adds new time item to the end of an array
  if (queue.length > N)
  {
      queue.shift();
      speed.innerText = ( (N-1)*1000/(queue[N-1] - queue[0]) ).toFixed(2);
      //speed2.innerText = ( (N-1)*1000*60/(queue[N-1] - queue[0]) ).toFixed(1);

  }

    
  }

function reset() {
  count = 0;
  countEl.innerText = count;
  document.querySelector('#save').disabled = false;
  document.querySelector('#increace').disabled = false;
}

function save() {
  let d = new Date(); 
  filename = "result"+d.getTime()+".txt";
  document.querySelector('#save').disabled = true;
  document.querySelector('#increace').disabled = true;
  download(filename, count);
}

function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + "clicks count: " + encodeURIComponent(text));
  pom.setAttribute('download', filename);

  pom.style.display = 'none';
  document.body.appendChild(pom);

  pom.click();

  document.body.removeChild(pom);

 

}