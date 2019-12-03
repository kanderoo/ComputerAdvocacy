function submit() {
	let answerArray = ["no"]
	for (let i = 0; i < answerArray.length; i++) {
		if (document.getElementsByTagName("input")[i].value == answerArray[i]) {
			alert("yay");
		}
	}
}
