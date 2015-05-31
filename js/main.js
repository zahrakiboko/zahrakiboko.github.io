function askQuestions () {



	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	$('h2').text('Hello ' + fullName);

	var age =  prompt('How old are you?');
	age = parseInt(age);

	if (age	>= 18)	{
		console.log('You are legal!');
	} else if (age >= 13) {
		console.log('Come back in a few years.');
	} else {
		console.log('Go away child!');
	}

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
		console.log('Welcome General!');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);
	}
}


// When the page has loaded
$ (function()	{

	$('img').on('click', askQuestions);

	//Hide all the content
	$('h3').next().hide();

	// When the user clicks an h3
	$('h3').on('click', function()	{

	//toggle the next element
	$(this).next().slideToggle(2000);

	});

	

});
