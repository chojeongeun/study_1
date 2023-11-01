const 정답 = 'APPLE';

let attempts = 0;
let index = 0;

function appStart() {
	const handleEnterkey = () => {
		//입력된 단어 확인
		for (let i = 0; i < 5; i++) {
			const block = document.querySelector(`.board-column[data-index="${attempts}${i}"]`);
			console.log(block.innerText);
		}
	};

	const handleKeydown = (e) => {
		const key = e.key.toUpperCase();
		const keyCode = e.keyCode;
		const thisBlock = document.querySelector(`.board-column[data-index="${attempts}${index}"]`);

		//단어가 다 입력됐을때
		if (index === 5) {
			if (e.key === 'Enter') handleEnterkey();
			else return;
		} else if (65 <= keyCode && keyCode <= 90) {
			thisBlock.innerText = key;
			index += 1;
		}
	};
	window.addEventListener('keydown', handleKeydown);
}
appStart();
