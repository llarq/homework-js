// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

const body = document.querySelector("body")


const checkboxOne = document.querySelector(".checkboxOne")
const checkboxTwo = document.querySelector('.checkboxTwo')
const checkboxThree = document.querySelector('.checkboxThree')

const ChangeBgColorRed = () => {
  body.style.backgroundColor = checkboxOne.value
}
const ChangeBgColorWhite = () => {
	body.style.backgroundColor = checkboxTwo.value
}
const ChangeBgColorGreen = () => {
	body.style.backgroundColor = checkboxThree.value
}

checkboxOne.addEventListener('click', ChangeBgColorRed)
checkboxTwo.addEventListener('click', ChangeBgColorWhite)
checkboxThree.addEventListener('click', ChangeBgColorGreen)


// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const enterTextInput = document.querySelector("#name-input")
const changeTextOutput = document.querySelector("#name-output")

const textChange = () => {
  changeTextOutput.textContent = enterTextInput.value
}

enterTextInput.addEventListener('click', textChange)