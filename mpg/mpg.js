"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
function calculateMpg(miles, gallons) {
	var mpg = (miles / gallons);
	mpg = mpg.toFixed(1);
	return mpg;
};
var processEntries = function() {
    var miles = $("miles").value;
    var gallons = $("gallons").value;
    var isValid = true;

    if (isNaN(miles) || miles <= 0) {
       	$("miles").nextElementSibling.firstChild.nodeValue =
           	"Miles must be numeric and greater than zero";
        isValid = false;
    }
    if (isNaN(gallons) || gallons <= 0) {
       	$("gallons").nextElementSibling.firstChild.nodeValue =
      		"Gallons must be numeric and greater than zero";
       	isValid = false;
    }
    if (isValid) {
        $("mpg").value = calculateMpg(miles, gallons);
        $("miles").nextElementSibling.firstChild.nodeValue = "";
        $("gallons").nextElementSibling.firstChild.nodeValue = "";
    }
};
var clearEntries = function() {
	$("miles").value = "";
	$("gallons").value = "";
	$("mpg").value = "";
    $("miles").nextElementSibling.firstChild.nodeValue = "*";
    $("gallons").nextElementSibling.firstChild.nodeValue = "*";
};
window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
	$("miles").ondblclick = clearEntries;
    $("miles").focus();
};
