var available = document.querySelector("h3");
// console.log(available);

var mainTitle = document.querySelector(".main-title");
// console.log(mainTitle);
// intro.style.color = "red";

var firstItem = document.querySelector("ul li");
// console.log(firstItem);
// intro.style.fontSize = "3em";

var intro = document.querySelector(".intro p");
// console.log(intro);
// intro.style.fontStyle = "italic";

var firstImg = document.querySelector("img");
// console.log(firstImg);
// firstImg.src = "img/lulu.jpeg";
// firstImg.alt = "Lulu bouquet";

var firstCaption = document.querySelector("figcaption");
// console.log(firstCaption);
// firstCaption.innerText = "The Lulu";
// firstCaption.innerHTML = "The <strong>Lulu</strong>";

var intro = document.querySelector(".intro p");
// console.log(intro);
intro.innerHTML = 'Available <span class="increase__size">today</span>';

var attention = document.querySelector(".increase__size");
attention.style.fontSize = "2.5em";
