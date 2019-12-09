//Initialize Question
var formArray = [["What's your favorite color?", "Blue"],
		 ["Help", "no"],
		 ["Convert this to binary: 2", "10"]];
var questionNum = 0;
var userName = "";

function displayQuestion(questionNum) {
	//CREATE ELEMENTS
	let wrapper = document.createElement("form");
	let p = document.createElement("p");
	let input = document.createElement("input");
	let submit = document.createElement("button");
	
	//INITIALIZE ELEMENTS
	p.innerHTML = formArray[questionNum][0];
	input.type = "text";
	wrapper.setAttribute("onsubmit", "return false");
	submit.addEventListener("click", function(){ checkAnswer(questionNum) });
	submit.innerHTML = "Submit";
	
	//APPEND ELEMENTS
	wrapper.appendChild(p);
	wrapper.appendChild(input);
	wrapper.appendChild(submit);
	document.body.appendChild(wrapper);

	document.body.children[questionNum+3].children[1].focus();
}

function checkAnswer(number) {
	debugger;
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
	xhr.open("POST", "/submit", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
		time: document.getElementById("timer").innerHTML,
		name: document.getElementById("nameField").value
	}));
}

function increaseTimer() {
	document.getElementById("timer").innerHTML = parseInt(document.getElementById("timer").innerHTML)+1
}

