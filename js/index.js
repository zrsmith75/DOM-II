// Your code goes here
// let navWords = document.querySelectorAll('a');
// navWords.forEach(words => words.style.color = "red");

let navBar = document.querySelector('.nav');

navBar.addEventListener('mouseover', function(event) {
    event.target.style.color = "red";

    setTimeout(function() {
       event.target.style.color = "";
    },2000);
}, false);

let funBusLogo = document.querySelector('.logo-heading');

funBusLogo.addEventListener('click', function() {
    
});