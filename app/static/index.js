function submit() {
	let answerArray = ["testAnswer"]
	for (let i = 0; i < answerArray.length; i++) {
		if (document.getElementsByTagName("input")[i].value == answerArray[i]) {
			alert("Correct!");
		}
	}
}
