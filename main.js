function AgeVerification(){
	let age = document.getElementById("age").value;
	if (age < 18 && age > 0) {
		alert("You are not of legal age.");
	}

	// previous statement

	else {
		alert("You are allowed to vote!")
	}
}