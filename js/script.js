//== scroll down ==\\
var scrollHeight = window.$("header").height();
window.$("#scroll-down").on("click", function () {
	"use strict";
	window.$("html, body").animate({
		scrollTop: Number(scrollHeight) + 80
	}, 1000);
});
//== end scroll down ==\\

//== start Text carousel ==\\
function one() {
	"use strict";
	window.$("#qout-two, #qout-three, #qout-four").hide();
	window.$("#qout-one").fadeIn(2000);
	window.$("#one").css("background-color", "#888");
	window.$("#two, #three, #four").css("background-color", "#fff");
}
function two() {
	"use strict";
	window.$("#qout-one, #qout-three, #qout-four").hide();
	window.$("#qout-two").fadeIn(2000);
	window.$("#two").css("background-color", "#888");
	window.$("#one, #three, #four").css("background-color", "#fff");
}
function three() {
	"use strict";
	window.$("#qout-one, #qout-two, #qout-four").hide();
	window.$("#qout-three").fadeIn(2000);
	window.$("#three").css("background-color", "#888");
	window.$("#one, #two, #four").css("background-color", "#fff");
}
function four() {
	"use strict";
	window.$("#qout-one, #qout-two, #qout-three").hide();
	window.$("#qout-four").fadeIn(2000);
	window.$("#four").css("background-color", "#888");
	window.$("#one, #two, #three").css("background-color", "#fff");
}
//== 
window.$("#one").on("click", function () {
	"use strict";
	one();
});
window.$("#two").on("click", function () {
	"use strict";
	two();
});
window.$("#three").on("click", function () {
	"use strict";
	three();
});
window.$("#four").on("click", function () {
	"use strict";
	four();
});
//== End Text carousel ==\\