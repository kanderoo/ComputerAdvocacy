for (var i = 0; i < data.length; i++) {
	let tr = document.createElement("tr");
	let number = document.createElement("td");
	let name = document.createElement("td");

	number.innerHTML = data[i][0]
	name.innerHTML = data[i][1]

	tr.appendChild(number);
	tr.appendChild(name);
	document.getElementsByTagName("table")[0].appendChild(tr);
}
