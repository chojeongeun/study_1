//타이머 만들기
const 시작_시간 = new Date();

function setTime() {
	const 현재_시간 = new Date();
	const 흐른_시간 = new Date(현재_시간 - 시작_시간);

	const 분 = 흐른_시간.getMinutes().toString().padStart(2, '0'); //문자열로 바꿔주는 함수
	const 초 = 흐른_시간.getSeconds().toString().padStart(2, '0');
	const timeH1 = document.querySelector('.time');
	timeH1.innerText = `${분}:${초}`;
}

setInterval(setTime, 1000);
