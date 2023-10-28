const timeElement = document.querySelector('.time');
function 클릭시_실행될_함수() {
	timeElement.style.color = 'orange';
	timeElement.style.background = 'lightgreen';
	timeElement.innerText = '12:00';
}
timeElement.addEventListener('click', 클릭시_실행될_함수);
