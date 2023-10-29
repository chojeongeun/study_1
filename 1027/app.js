function setTime() {
	const time = new Date();
	const 분 = time.getMinutes().toString(); //문자열로 바꿔주는 함수
	const 초 = time.getSeconds().toString();
	const timeH1 = document.querySelector('.time');
	timeH1.innerText = `${분.padStart(2, '0')}:${초.padStart(2, '0')}`;
}

setInterval(setTime, 1000);

//padStart() 사용법
console.log('1'.padStart(2, '0'));
console.log('9'.padStart(5, '12345'));
console.log('11'.padStart(2, '0'));

//padStart는 문자열 내장함수이므로 숫자는 문자열로 바꿔주기
new Date().getMinutes.toString().padStart(2, '0');
