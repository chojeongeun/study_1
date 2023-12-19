const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const panel = document.querySelector('.panel');

next.addEventListener('click', () => {
	new Anime(panel, {
		prop: 'margin-left',
		value: '-200%',
		duration: 500,
		callback: () => {
			panel.append(panel.firstElementChild);
			panel.style.marginLeft = '-100%';
		},
	});
});
