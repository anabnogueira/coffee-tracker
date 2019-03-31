//
//	Set the variable weekday to 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'
//	depending on which day Jan 1st was
//

var weekday = ''

//
//	Change the colourmap array to the rgb hex codes desired
//

var colourmap = ['#eaeaea', '#b3cde9', '#6497c1', '#005ba6', '#03397c', '#011f5b'];

//
//	Change stats to the output of parse.py
//

var stats = ''

// ----------------------------------------

var coffee = document.getElementById('coffee');
var ht = document.getElementById('howto');
var shift = 0;
var week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

function showComment(event) {
	var description = document.getElementById('comment');
	description.textContent = event.target.getAttribute('name');
}

function hideComment() {
	var description = document.getElementById('comment');
	description.textContent = '';
}

for (; shift < week.length; shift++) {
	if (weekday == week[shift]) {
		break;
	}
}

// Setting the shift for the first of january
for (i = 0; i < shift; i++) {
	var div = document.createElement('div');
	div.setAttribute('class', 'square');
	div.style.backgroundColor = '#ffffff';
	coffee.appendChild(div);
}

// Populate with data
for (j = 0; j < stats.length; j++) {
	var div = document.createElement('div');
	div.setAttribute('class', 'square');
	div.style.backgroundColor = colourmap[stats[j][1]];

	if (stats[j].length == 3) {
		div.setAttribute('name', stats[j][2]);
		div.onmouseover = showComment;
		div.onmouseout = hideComment;
	}
	coffee.appendChild(div);
}

for (k = 0; k < colourmap.length; k++) {
	var div = document.createElement('div');
	div.setAttribute('class', 'square');
	div.style.backgroundColor = colourmap[k];
	ht.appendChild(div);
}