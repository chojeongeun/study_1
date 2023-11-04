const 정답 = 'APPLE';

let attempts = 0;
let index = 0;
let timer;

function appStart() {
	const displayGameover = () => {
		const div = document.createElement('div');
		div.innerText = '게임이 종료됐습니다.';
		div.style = 'display:flex; justify-content:center; align-items:center;position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);background-color:white; width:200px; height:100px;';
		document.body.appendChild(div);
	};

	// 다음 줄로 넘기는 함수
	const nextLine = () => {
		if (attempts === 6) return gameover();
		attempts += 1;
		index = 0;
	};

	const gameover = () => {
		window.removeEventListener('keydown', handleKeydown);
		displayGameover();
		clearInterval(timer);
	};

	const handleEnterkey = () => {
		let 맞은_갯수 = 0;
		//입력된 단어 확인
		for (let i = 0; i < 5; i++) {
			const block = document.querySelector(`.board-column[data-index="${attempts}${i}"]`);
			const 입력한_글자 = block.innerText;
			const 정답_글자 = 정답[i];
			//console.log('입력한_글자', 입력한_글자, '정답_글자', 정답_글자);
			if (입력한_글자 === 정답_글자) {
				맞은_갯수 += 1;
				block.style.background = '#6aaa64';
			} else if (정답.includes(입력한_글자)) block.style.background = '#c9b458';
			else block.style.background = '#787c7e';

			block.style.color = 'white';
		}

		if (맞은_갯수 === 5) gameover();
		else nextLine();
	};

	const handleBackSpace = () => {
		if (index > 0) {
			const preBlock = document.querySelector(`.board-column[data-index="${attempts}${index - 1}"]`);
			preBlock.innerText = '';
		}
		if (index !== 0) index -= 1;
	};

	const handleKeydown = (e) => {
		const key = e.key.toUpperCase();
		const keyCode = e.keyCode;
		const thisBlock = document.querySelector(`.board-column[data-index="${attempts}${index}"]`);

		if (e.key === 'Backspace') handleBackSpace();
		//단어가 다 입력됐을때
		else if (index === 5) {
			if (e.key === 'Enter') handleEnterkey();
			else return;
		} else if (65 <= keyCode && keyCode <= 90) {
			thisBlock.innerText = key;
			index += 1;
		}
	};

	const startTimer = () => {
		const 시작_시간 = new Date();

		function setTime() {
			const 현재_시간 = new Date();
			const 흐른_시간 = new Date(현재_시간 - 시작_시간);
			const 분 = 흐른_시간.getMinutes().toString().padStart(2, '0');
			const 초 = 흐른_시간.getSeconds().toString().padStart(2, '0');
			const timeDiv = document.querySelector('#timer');
			timeDiv.innerText = `${분}:${초}`;
		}

		timer = setInterval(setTime, 1000); //setInterval의 아이디(몇번째 인터벌이 돌고있는지 컨트롤 가능)
	};

	startTimer();
	window.addEventListener('keydown', handleKeydown);
}
appStart();
