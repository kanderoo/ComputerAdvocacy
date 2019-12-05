//Initialize Questions
var formArray = [["What's your favorite color?", "Blue"],
		 ["Help", "no"],
		 ["Convert this to binary: 2", "10"]];
var questionNum = 0;

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

	document.body.children[questionNum+1].children[1].focus();
}

function checkAnswer(number) {
	if (document.getElementsByTagName("input")[number].value == formArray[number][1]) {
		questionNum++;
		displayQuestion(questionNum);
	} else {
		alert("incorrect")
	}
}

displayQuestion(questionNum);
