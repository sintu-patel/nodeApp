var menuButton = document.querySelector('#open_menu');
var lessonList = document.querySelector('#lesson_list');
var hidden = true;
menuButton.onclick = function() {
	if (hidden) {
		lessonList.style.display = 'block';
		hidden = false;
	} else {
		lessonList.style.display = 'none';
		hidden = true;
	}
};
