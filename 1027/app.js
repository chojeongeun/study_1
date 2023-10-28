//태그를 가져오는 방법 1
//const timeElement = document.getElementById('time');
//우리가 나중에 사용할때 쓸수있게 변수로 선언

//태그 가져오는 방법 2 - 태그이름, 아이디, 클래스를 통해 가져올수있음
const timeElement = document.querySelector('.time');

//태그 스타일 변경
timeElement.style.color = 'orange';
timeElement.style.background = 'lightgreen';
timeElement.innerText = '12:00';

//타이틀 변경
document.title = '★';
