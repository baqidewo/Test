var age=18;
let ageBox = typeof age;

let body = document.querySelector('body');

let p = document.createElement('p');
p.textContent = ageBox;
body.appendChild(p)
