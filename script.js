let player
let winner = null
let playerSelect = document.querySelector('[data-js="player_select"]')
let winnerSelect = document.querySelector('[data-js="winner_select"]')
let squares = document.querySelectorAll('.square')
let btn_reset = document.querySelector('[data-js="btn_reset"]')

function choseSquare(){
	squares.forEach((square, index) =>{
		// console.log(square, index)
		square.addEventListener('click', () =>{
			if( winner !== null ){
				return;
			}

			if( square.innerHTML !== '-' ){
				return;
			}
			square.innerHTML = player
			square.style.color = "#000"
			square.style.padding = "48px"

			if( player == 'x' ){
				player = 'o'
			}else{
				player = 'x'
			}
			changePlayer(player)
			checkWinner()
			// console.log(index + 1)
		})
	})
}

function changePlayer(value){
	player = value
	playerSelect.innerHTML = player
}

function checkWinner(){
	let square1 = document.getElementById('1')
	let square2 = document.getElementById('2')
	let square3 = document.getElementById('3')
	let square4 = document.getElementById('4')
	let square5 = document.getElementById('5')
	let square6 = document.getElementById('6')
	let square7 = document.getElementById('7')
	let square8 = document.getElementById('8')
	let square9 = document.getElementById('9')

	if(checkSequence(square1, square2, square3)){
		changeColorSquare(square1, square2, square3)
		changeWinner(square1)
		return
	}

	if(checkSequence(square4, square5, square6)){
		changeColorSquare(square4, square5, square6)
		changeWinner(square4)
		return
	}

	if(checkSequence(square7, square8, square9)){
		changeColorSquare(square7, square8, square9)
		changeWinner(square7)
		return
	}

	if(checkSequence(square1, square4, square7)){
		changeColorSquare(square1, square4, square7)
		changeWinner(square1)
		return
	}

	if(checkSequence(square2, square5, square8)){
		changeColorSquare(square2, square5, square8)
		changeWinner(square2)
		return
	}

	if(checkSequence(square3, square6, square9)){
		changeColorSquare(square3, square6, square9)
		changeWinner(square3)
		return
	}

	if(checkSequence(square1, square5, square9)){
		changeColorSquare(square1, square5, square9)
		changeWinner(square1)
		return
	}

	if(checkSequence(square3, square5, square7)){
		changeColorSquare(square3, square5, square7)
		changeWinner(square3)
		return
	}
}

function changeColorSquare(square1, square2, square3){
	square1.style.background = "#0f0"
	square2.style.background = "#0f0"
	square3.style.background = "#0f0"
}

function changeWinner(square){
	winner = square.innerHTML
	winnerSelect.innerHTML = winner
}

function checkSequence(square1, square2, square3){
	let isEqual = false
	if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
		isEqual = true
	}
	// console.log(square1, square2, square3)
	return isEqual
}

btn_reset.addEventListener('click', reset)

function reset(){
	winner = null
	winnerSelect.innerHTML = ''
	for(let i = 1; i <=9; i++){
		let square = document.getElementById(i)
		square.style.background = "#eee";
		square.style.color = "#eee";
		square.innerHTML = "-";
	}
	changePlayer('x')
}

changePlayer('x')
choseSquare()
