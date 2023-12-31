/*
숫자 맞추기 게임
랜덤 번호 지정
유저가 번호를 입력한다. 그리고 go라는 버튼을 누른다.
만약 유저가 랜덤번호를 맞추면, 맞췄습니다!
랜덤번호 < 유저번호 : Down!!
랜덤번호 > 유저번호 : Up!!
Reset버튼 누르면 게임이 리셋된다
5번의 기회를 다 쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회 깎지 않는다.
유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회 깎지 않는다.

Math.random() : 랜덤한 숫자를 뽑을수있게 도와주는 함수!
0~1까지의 숫자를 뽑는데, 1은 포함 안되고 1에 가까운 숫자를 반환
Math.floor() : 뒤에 있는 것들을 버리겠다.

go클릭했을때 이벤트 넣어주기
*/

let computerNum = 0;
// document = 웹페이지 그 자체
// Id로부터 선택할거다. 그 아이디는 play-button이다
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];

// addEventListener(이벤트이름, 이벤트 발생시 실행함수)
//함수를 매개변수로 변수처럼 넘김
//함수()형태로 보내면 실행되어버리므로 ()는 빼고 변수처럼 보내기
//함수도 매개변수처럼 넘길수있다!
playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function () {
	userInput.value = '';
});

function pickRandomNum() {
	// 0~99 에서 + 1 을 함으로써 1~100 이 된다.
	computerNum = Math.floor(Math.random() * 100) + 1;
	console.log('정답', computerNum);
}

function play() {
	let userValue = userInput.value;

	if (userValue < 1 || userValue > 100) {
		resultArea.textContent = '1과 100사이 숫자를 입력해주세요';
		return;
	}

	if (history.includes(userValue)) {
		resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.';
		return;
	}

	chances--;
	// 정적인 값과 동적인 값을 같이 쓸때 사용
	chanceArea.textContent = `남은 기회: ${chances}번`;
	console.log('chance', chances);

	if (userValue < computerNum) {
		resultArea.textContent = 'UP!!!';
	} else if (userValue > computerNum) {
		resultArea.textContent = 'DOWN!!!';
	} else {
		resultArea.textContent = '맞췄습니다!!!';
		gameOver = true;
	}

	history.push(userValue);
	console.log(history);

	if (chances < 1) {
		gameOver = true;
	}

	if (gameOver == true) {
		playButton.disabled = true;
	}
}

function reset() {
	//user input창이 깨끗하게 정리되고
	userInput.value = '';
	//새로운 번호가 생성되고
	pickRandomNum();
	resultArea.textContent = '결과값이 여기 나옵니다!';
}

pickRandomNum();
