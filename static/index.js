//Initialize Question
var formArray = [["Convert 11 from decimal to hexadecimal", "B", "Decimal is base 10, whereas hexadecimal is base 16"],
		 ["How many bits are in a byte?", "8", "placeholder hint"],
		 ["How many bytes are in a kilobyte?", "1000", "Think of a gram to a kilogram"],
		 ["What is printed by the following expression: <pre><code> int x = 1; \n printf(x + 4);</code></pre>", "5", "The printf statement takes the value of 'x', and adds 4 to it."],
		 ["What will be the last number printed by the following expression: <pre><code> for (int i = 0; i < 10; i++) { \n\tprintf(i); \n }</code></pre>", "9", "This loops the print statement and increments 'i' by one afterward"]];

var questionNum = 0;
var userName = "";

function displayQuestion(questionNum) {
	//CREATE ELEMENTS
	let wrapper = document.createElement("form");
	let p = document.createElement("p");
	let input = document.createElement("input");
	let hint = document.createElement("p")
	let submit = document.createElement("button");
	
	//INITIALIZE ELEMENTS
	p.innerHTML = formArray[questionNum][0];
	input.type = "text";
	hint.innerHTML = "Show Hint";
	hint.className = "hintButton";
	hint.addEventListener("click", function(){ hintChange(questionNum) });
	wrapper.setAttribute("onsubmit", "return false");
	submit.addEventListener("click", function(){ checkAnswer(questionNum) });
	submit.innerHTML = "Submit";
	
	//APPEND ELEMENTS
	wrapper.appendChild(p);
	wrapper.appendChild(input);
	wrapper.appendChild(hint);
	wrapper.appendChild(submit);
	document.body.appendChild(wrapper);

	document.body.children[questionNum+3].children[1].focus();
}

function hintChange(number) {
	debugger;
	let parentForm = document.getElementsByTagName("form")[number+1] 
	let hintButton = parentForm.getElementsByClassName("hintButton")[0]
	if (parentForm.getElementsByClassName("hintBox").length == 0) {
		let div = document.createElement("div")
		div.innerHTML = formArray[number][2];
		div.className = "hintBox";
		parentForm.insertBefore(div, parentForm.children[3]);
		hintButton.innerHTML = "Hide Hint"
	} else {
		parentForm.removeChild(parentForm.getElementsByClassName("hintBox")[0]);
		hintButton.innerHTML = "Show Hint"
	}
}

function checkAnswer(number) {
	if (document.getElementsByTagName("input")[number+2].value == formArray[number][1]) {
		if (questionNum+1 < formArray.length) {
			questionNum++;
			displayQuestion(questionNum);
		} else {
			postData();
		}
	} else {
		alert("Sorry, incorrect!")
	}
}

function postData() {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/submit", false);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
		time: document.getElementById("timer").innerHTML,
		name: document.getElementById("nameField").value
	}));
	location.reload();
}

function increaseTimer() {
	document.getElementById("timer").innerHTML = parseInt(document.getElementById("timer").innerHTML)+1
}
