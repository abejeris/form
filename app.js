const form = document.querySelector('form');
const text = document.querySelector('#text');
const check = document.querySelector('#checkbox');
const select = document.querySelector('#select');

const details = {};
form.addEventListener('submit', (e) => {
	e.preventDefault();
});

for (let input of [text, check, select]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		details[name] = type === 'checkbox' ? checked : value;
		console.log(details);
	});
}
