const counters = document.querySelectorAll('.counter');
const speed = 720; // The lower the slower
const targetScrollPosition = 1000; // Scroll position target

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// Check if target is reached and scroll position is at target
		if (count < target && window.pageYOffset >= targetScrollPosition) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	// Update counter when scroll position is at target
	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= targetScrollPosition) {
			updateCount();
		}
        else{
            counter.innerText(" ");
        }
	});
});
