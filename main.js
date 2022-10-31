let count = 0;
let countEl = document.getElementById("count-el");
let buttons = document.querySelectorAll("button");
let speed = document.getElementById("clInMin")
let speed2 = document.getElementById("clInMin2")
queue = [];
queueV = [];

var N = 5;

let time_prev = 0;
let Vi = 0;
let Vavr = 0;
let count1 = 0;


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
  }

  increase2();  
}



function increase2() {
  count1 += 1;

  let d = new Date();
  let time = d.getTime();
  
  if (count1 > 1 ){
    Vi = 1/(time-time_prev);
    time_prev = time;
  }
 
  queueV.push(Vi);
  
  if (queueV.length > N){
    queueV.shift();
    Vavr = 0;
    for(i = 0; i < N; i++){
       Vavr += queueV[i]; 
    }
    Vavr/=N;
    Vavr*=1000;
    speed2.innerText = Vavr.toFixed(2);
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