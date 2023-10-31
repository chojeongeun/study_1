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

function appStart() {
	const handleKeydown = (e) => {
		// 특정 키를 뽑아서 그 키를 현재 위치에다가 업데이트
		const key = e.key;
		const keyCode = e.keyCode;
		const thisBlock = document.querySelector('.board-column[data-index="00"]');
		thisBlock.innerText = key;
	};
	window.addEventListener('keydown', handleKeydown);
}

appStart();
