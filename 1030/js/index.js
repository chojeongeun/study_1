/*
요구사항
1) 5글자
2) 6번의 시도 가능
3) 존재하면 노란색, 위치도 맞으면 초록색으로 표시
4) 게임 종료 판단
(추가) 상단에 게임 시간 표시하기

(선택)키보드에도 동일하게 표시
(선택)키보드 클릭으로도 입력
*/
// addeventlistener안에 있는 함수는 이벤트가 암묵적으로 전달된다(event)
// 조건문1: 알파벳이 필요하기 때문에 keyCode에서 65~90까지의 값만 갖도록
// 대문자로 바꾸는 함수 : toUpperCase()
// 다음 인덱스로 넘어가는 과정
/*
let attempts = 0;
let index = 0;

function appStart() {
	const handleEnterkey = () => {
		//정답확인
	};

	const handleKeydown = (e) => {
		//index가 5면 값을 반환하고 나가버림
		if (index === 5) return;
		console.log('키가 입력!!', e.key);
		// 5일때, 엔터키만 눌려야됨

		// 특정 키를 뽑아서 그 키를 현재 위치에다가 업데이트
		const key = e.key.toUpperCase();
		const keyCode = e.keyCode;
		const thisBlock = document.querySelector(`.board-column[data-index='${attempts}${index}']`);

		if (65 <= keyCode && keyCode <= 90) {
			thisBlock.innerText = key;
			index += 1;
			//같은 표현이라 볼수있음
			//index += 1;
			//index = index + 1;
			//index++;
		}
	};
	window.addEventListener('keydown', handleKeydown);
}

appStart();
*/

let attempts = 0;
let index = 0;

function appStart() {
	const handleKeydown = (e) => {
		if (index === 5) return;
		console.log('키가 입력!!!', e.key);

		const key = e.key.toUpperCase();
		const keyCode = e.keyCode;
		const thisBlock = document.querySelector(`.board-column[data-index="${attempts}${index}"]`);

		if (65 <= keyCode && keyCode <= 90) {
			thisBlock.innerText = key;
			index += 1;
		}
	};
	window.addEventListener('keydown', handleKeydown);
}
appStart();
