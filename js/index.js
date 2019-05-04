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

// 5 and 6 hide footer with mouseover, the unhide with image mouseover
const footerGone = document.querySelector('.footer p');
const imgFooterFix = document.querySelector('.content-destination img');

footerGone.addEventListener('mouseover', (event) => {
    event.target.style.display = 'none';
});

imgFooterFix.addEventListener('mouseover', () => {
    const footer = document.querySelector('.footer p');
    footer.style.display = '';
});

// 7 hide content-section based on click, use setTimeout

const imgsGone = document.querySelector('.intro h2');

imgsGone.addEventListener('click', (event) => {
    // const imgs = document.querySelectorAll('.img-content img');
    const content = document.querySelectorAll('.content-section');
    // imgs[0].style.display = 'none';
    // imgs.forEach(function(item) {
    //     item.style.display = 'none';
    // });

    // setTimeout(function() {
    //     imgs.forEach(function(item) {
    //         item.style.display = '';
    //     });
    // }, 5000);

    content.forEach(function(item) {
        item.style.display = 'none';
    });

    setTimeout(function() {
        content.forEach(function(item) {
           item.style.display = '';
        });
    }, 5000);

}, false);

// 8 
const letsGo = document.querySelectorAll('.text-content h2');

letsGo[0].addEventListener('mouseover', (event) => {
    const info = document.querySelectorAll('.text-content p');
    event.target.textContent = "Get off your butt!";
    info[0].textContent = "Get going and find some adventure! Adventure is where you find it, so start your search and live a life of adventure."
    info[0].style.color = "red";

    setTimeout(function() {
        event.target.textContent = "Let's Go!";
        info[0].textContent = "Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized."
        info[0].style.color = "";
    },6000);
}, false);

// 9 use wheel to make everything disappear for 3s

const body = document.querySelector('body');

body.addEventListener('wheel', (event) => {
    event.target.style.display = 'none';

    setTimeout(function() {
        event.target.style.display = '';
    }, 3000);
}, false);

// 10 use click to alert when clicking on nav
navBar.addEventListener('click', (event) => {
    alert('Did you just get hacked? Opps ... ');
});