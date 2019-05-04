// Your code goes here
// let navWords = document.querySelectorAll('a');
// navWords.forEach(words => words.style.color = "red");

// 1 Modify nav links color using mouseover
const navBar = document.querySelector('.nav');

navBar.addEventListener('mouseover', (event) => {
    event.target.style.color = "red";

    setTimeout(function() {
       event.target.style.color = "";
    },2000);
}, false);


// 2 Change Fun Bus logo using click and toggle
const funBusLogo = document.querySelector('.logo-heading');

funBusLogo.addEventListener('click', () => {
    funBusLogo.classList.toggle('change-logo');
});


// 3 and 4 Fade out bus image using double click and mouseleave
const busImg = document.querySelector('.intro img');

busImg.addEventListener('dblclick', (event) => {
    event.target.style.opacity = 0;
});

busImg.addEventListener('mouseleave', (event) => {
    event.target.style.opacity = 1;
});

// 5

