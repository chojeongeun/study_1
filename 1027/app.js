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
//timeElement.addEventListener('click', 색깔_바꿔주는_함수);
function 숫자를_바꿔주는_함수() {
	timeElement.innerText = '12:00';
}
timeElement.addEventListener('click', 숫자를_바꿔주는_함수);
//너가 클릭했을때 실행될 함수는 이거야! 라고 이름만 쓰기
//()를 넣어버리면 그 자리에서 실행되므로 안됨!

timeElement.addEventListener('mouseover', 실행될_함수);

//윈도우 자체에도 이벤트 줄수있음
window.addEventListener('resize', 실행될_함수);
