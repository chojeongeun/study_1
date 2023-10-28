const timeElement = document.querySelector('.time');
function 실행될_함수() {
	timeElement.style.color = 'red';
}
function 색깔_바꿔주는_함수() {
	if (timeElement.style.color === 'orange') {
		timeElement.style.color = 'blue';
	} else {
		timeElement.style.color = 'orange';
	}
}
timeElement.addEventListener('click', 색깔_바꿔주는_함수);
