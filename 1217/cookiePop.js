const pop = document.querySelector('#pop');
const ck = pop.querySelector('#ck');
const btnClose = pop.querySelector('.close');
const [btnShowCookie, btnDelCookie] = document.querySelectorAll('button');

if (document.cookie.indexOf('today=done') < 0) {
	pop.style.display = 'block';
} else {
	pop.style.display = 'none';
}

function setCookie(name, value, days) {
	let today = new Date();
	let duedate = today.getDate() + days;
	today.setDate(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${today.toUTCString()}`;
}

//setCookie('today','done',1)

btnShowCookie.addEventListener('click', () => {
	console.log(document.cookie);
});

btnDelCookie.addEventListener('click', () => {
	setCookie('today', 'done', 0);
	alert('쿠키가 삭제되었습니다');
});

btnClose.addEventListener('click', () => {
	if (ck.checked) setCookie('today', 'done', 1);
	pop.style.display = 'none';
});
