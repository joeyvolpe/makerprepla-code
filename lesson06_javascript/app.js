console.log(document.body);
console.log(document.querySelector('p'));
console.log(document.querySelector('#primary'));
console.log(document.querySelector('.important'));
console.log(document.querySelector('p.important').textContent);
console.log(document.querySelector('#nav ol li').textContent);
document.querySelector('h1, p').textContent = "I'm on the page!";
console.log(document.querySelector('h1, p').textContent);
