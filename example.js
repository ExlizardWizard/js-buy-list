function kek(myFunction) {
	var myValue = 'KEKEKEK';

	for (var i = 0; i < 10; i++) {
		myValue = myValue + i;

		myFunction(i, myValue);
	}
}


kek(function(i, value){
	console.log("LOasdasdsdL " + (i * i) + ": " + value);
})