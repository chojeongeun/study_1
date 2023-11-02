const 정답 = 'APPLE';

let attempts = 0;
let index = 0;

function appStart() {
	// 다음 줄로 넘기는 함수
	const nextLine = () => {
		attempts += 1; //첫번째 시도, 두번째 시도 이런 줄을 나타내는 단
		index = 0; //초기화
	};
	const handleEnterkey = () => {
		//입력된 단어 확인
		for (let i = 0; i < 5; i++) {
			const block = document.querySelector(`.board-column[data-index="${attempts}${i}"]`);
			const 입력한_글자 = block.innerText;
			const 정답_글자 = 정답[i];
			// console.log('입력한_글자', 입력한_글자, '정답_글자', 정답_글자);
			if (입력한_글자 === 정답_글자) block.style.background = '#6aaa64';
			else if (정답.includes(입력한_글자)) block.style.background = '#c9b458';
			else block.style.background = '#787c7e';
			block.style.color = 'white';
		}
		nextLine();
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
