// Slider
const slyderArray = document.querySelectorAll('.testimonial-cards');
const buttons = document.querySelectorAll('.slyde__arrow');
let active = 0; //Will hold active card in  Array

// Add Event Listeners to Buttons

// Left Arrow
buttons[0].addEventListener('click', getPrev);
// Right Arrow
buttons[1].addEventListener('click', getNext);

// Functions for event listener call backs

// FixMe: When active gets to 5, it should reset back to 0
function getNext() {
	// toggle inactive for current slide
	slyderArray[active].classList.toggle('active');
	slyderArray[active].classList.toggle('inactive');
	active++;
	// toggle active for next slide
	slyderArray[active].classList.toggle('active');
	slyderArray[active].classList.toggle('inactive');

	console.log(active);
}

function getPrev() {
	// toggle inactive for current slide
	slyderArray[active].classList.toggle('active');
	slyderArray[active].classList.toggle('inactive');
	active--;
	// toggle active for next slide
	slyderArray[active].classList.toggle('active');
	slyderArray[active].classList.toggle('inactive');

	console.log(active);
}
