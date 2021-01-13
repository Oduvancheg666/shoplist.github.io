$('ul').on('click', 'li', function() {
	$(this).toggleClass('done'); //По клику li применяется класс css "done". toggleClass - как выключатель
})

$('ul').on('click', 'span', function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(function(){ //Элемент li медленно исчезает
		$(this).remove(); //Элемент li удаляется из html документа
	});
})

$('input').keypress(function(event) {
	if(event.which === 13) {   // если фокус на поле input и нажат enter(13 which)
		var textInput = $(this).val(); // создаем переменную, в которую сохраняем введенный текст
		$(this).val(''); //очищаем поле input
		$('ul').append('<li>' + textInput + '   <span class="x">x</span></li> '); // в список ul добавляется введенный текст 

	}
})

