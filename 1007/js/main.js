const slider = document.querySelector('#slider');
const panel = slider.querySelector('#panel');
const btns = slider.querySelectorAll('.btn li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		for (const el of btns) el.classList.remove('on');
		btns[idx].classList.add('on');

		new Anime(panel, {
			prop: 'margin-left',
			value: -100 * idx + '%',
			duration: 500,
		});
	});
});

/*

slider 현재 위치값
0번째 -> margin-left: 0%; (-100 * 0)+'%'
1번째->-100%; (-100 * 1)+'%'
2번째->-200%  (-100 * 2)+'%'
3번째->-300%  (-100 * 3)+'%'
4번째->-400%; (-100 * 4)+'%'

*/
