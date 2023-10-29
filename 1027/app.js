function setTime() {
	const time = new Date();
	const 분 = time.getMinutes();
	const 초 = time.getSeconds();
	const timeH1 = document.querySelector('.time');
	timeH1.innerText = `${분}:${초}`;
}

setInterval(setTime, 1000);
