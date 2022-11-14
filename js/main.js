const ball = document.querySelector('img')
const question = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const list = [
	'Nie!',
	'Tak!',
	'Nie chcesz znać odpowiedzi na to pytanie...',
	'Próbuj dalej!',
	'Może...',
	'Ciężko powiedzieć.',
]

// function getRandom(list) {
// 	return list[Math.floor(Math.random() * list.length)]
// }

const generateAnswer = () => {
	const number = Math.floor(Math.random() * list.length)
	answer.innerHTML = ` <span>Odpowiedź: </span>  ${list[number]} `
}

const checkInput = () => {
	ball.classList.remove('shake-animation')

	// warunek if można również zapisać w poniższy sposób
	// if(question.value !== '' && question.value.slice(-1) === '?' {})

	if (question.value.endsWith('?') && question.value.length > 2) {
		// answer.textContent = 'Odpowiedź: ' + getRandom(list)
		generateAnswer(list)
		error.textContent = ''
	} else if (!question.value.endsWith('?') && question.value.length > 2) {
		error.textContent = 'Pytanie musi być zakończone znakiem zapytania!'
	} else {
		error.textContent = 'Musisz zadać pytanie!'
	}
}

const moveBall = () => {
	ball.classList.add('shake-animation')
	answer.textContent = ''
	setTimeout(checkInput, 1000)
}

ball.addEventListener('click', moveBall)
