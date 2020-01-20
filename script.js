let txtInput = document.getElementById("input");
let txtResult = document.getElementById("result");
let btnResult = document.getElementById("btn");

function lastLetter(valueTxt) {
	return valueTxt.substr((valueTxt.length-1), 1);
}
	
btnResult.onclick = function() {
	let valueTxt = txtInput.value;
	txtResult.innerHTML = lastLetter(valueTxt);
}
