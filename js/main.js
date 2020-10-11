// Slider
const slyderArray = document.querySelectorAll('.testimonial-cards');
const buttons = document.querySelectorAll('.slyde__arrow');
let active = 0; //Will hold active card in  Array
let isPressed = false;

// Add Event Listeners to Buttons

// Left Arrow
buttons[0].addEventListener('click', getPrev);
// Right Arrow
buttons[1].addEventListener('click', getNext);

function getNext() {
	isPressed = true;
	// Get rid of active class
	slyderArray[active].classList.toggle('active');
	slyderArray[active].classList.toggle('inactive');
	active = ++active % slyderArray.length;
	// Add active class
	slyderArray[active].classList.toggle('inactive');
	slyderArray[active].classList.toggle('active');
}

function getPrev() {
	if(active == 0) {
		return 0;
	}
	isPressed = true;
	// Get rid of active class
	slyderArray[active].classList.toggle('active');
	slyderArray[active].classList.toggle('inactive');
	active = --active % slyderArray.length;
	// Add active class
	slyderArray[active].classList.toggle('inactive');
	slyderArray[active].classList.toggle('active');
}

// AutoPlay
setInterval(getNext,5000)