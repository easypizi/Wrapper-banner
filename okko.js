
var open = document.querySelector(".button");
var small = document.querySelector(".banner");
var big = document.querySelector(".box");
var back = document.querySelector(".boxback");

open.onclick = function () {
	small.style.display = 'none';
	big.style.display = 'block';
	setTimeout(function() {
		back.style.width = '105%';
	}, 50);
}


// Динамическая ссылка
var link = document.querySelector('.link');

if (/iPhone/i.test(navigator.userAgent)) {
  link.href = "https://appsto.re/ru/G6sWA.i";
} else {
  link.href = "https://play.google.com/store/apps/details?id=ru.more.play";
}


