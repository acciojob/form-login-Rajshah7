function getFormvalue(e) {
	 e.preventDefault();

	const firstName = document.querySelctor("input[name='fname']").value.trim();
	const lastName = document.querySelector("input[name='lname']").value.trim();

	alert(`${firstName} ${lastName}`)
}

document.getElementById('form1').addEventListener('submit',getFormvalue);
