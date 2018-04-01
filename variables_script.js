console.log('Hello, js ok');
let root = document.querySelector(':root');

let rootStyles = getComputedStyle(root);

let red = rootStyles.getPropertyValue('--red');

console.log('red ', red);

root.style.setProperty('--red', 'green');
