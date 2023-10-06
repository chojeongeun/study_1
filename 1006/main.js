const tab = document.querySelector('#tab');
const btns = tab.querySelectorAll('ul li');
const boxs = tab.querySelectorAll('section article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		console.log(idx);
		for (const el of btns) el.classList.remove('on');
		btns[idx].classList.add('on');

		for (const el of boxs) el.classList.remove('on');
		boxs[idx].classList.add('on');
	});
});
