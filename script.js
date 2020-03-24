var input = document.querySelector(".block__form-input");
var btn = document.querySelector(".block__form-btn");
var blockList = document.querySelector(".block__list");

function createElements (text) {
	var newElem = document.createElement("p"); //создаем новый элемент
	var deleteSpan = document.createElement("span"); //добавляем элемент для удаление из списка

	deleteSpan.className = "block__list-dlt"; //добавляем класс спану
	deleteSpan.textContent = "X";

	newElem.className = "block__list-elem"; //добавляем ему класс
	newElem.textContent = text; // то что хранится
	newElem.appendChild(deleteSpan); //

	deleteSpan.addEventListener("click", function () {
		blockList.removeChild(newElem);	
	}); //событие удаление

	blockList.appendChild(newElem); //добавляем элемент
}
btn.addEventListener("click", function(e){
	e.preventDefault();
	if (!(input.value === "What needs to be done?" || input.value === " ")) {
			createElements(input.value);
			input.value = " ";
	}
});
input.addEventListener("focus", function () {
	input.value = " ";
});
input.addEventListener("blur", function () {
	if (input.value === " ")
	input.value = "What needs to be done?";
});