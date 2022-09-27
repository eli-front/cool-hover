const cursor = document.querySelector('.cursor');

// Listeners
document.addEventListener('mousemove', onMouseMove);

// Move the cursor
function onMouseMove(e) {
	cursor.style.transform = `translate3d(${e.pageX - 20}px, ${e.pageY - 20}px, 0)`;
}
