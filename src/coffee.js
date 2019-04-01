//
//	Set the variable weekday to 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'
//	depending on which day Jan 1st was
//

var weekday = 'TUE'

//
//	Change the colourmap array to the rgb hex codes desired
//

var colourmap = ['#eaeaea', '#b3cde9', '#6497c1', '#005ba6', '#03397c', '#011f5b'];

//
//	Modify stats variable to include your data -
//	aka, the output of parse.py
//

var stats = [['01/01', 3], ['02/01', 3], ['03/01', 3], ['04/01', 4], ['05/01', 4], ['06/01', 3], ['07/01', 3], ['08/01', 3], ['09/01', 3], ['10/01', 2], ['11/01', 4], ['12/01', 3], ['13/01', 2], ['14/01', 3], ['15/01', 4], ['16/01', 4], ['17/01', 3], ['18/01', 3], ['19/01', 3], ['20/01', 2], ['21/01', 2], ['22/01', 4], ['23/01', 3], ['24/01', 3], ['25/01', 3], ['26/01', 3], ['27/01', 0, 'sick'], ['28/01', 0, 'sick'], ['29/01', 1], ['30/01', 2], ['31/01', 3], ['01/02', 2], ['02/02', 2], ['03/02', 3], ['04/02', 4, 'last exam'], ['05/02', 2], ['06/02', 3], ['07/02', 2], ['08/02', 2], ['09/02', 2], ['10/02', 2], ['11/02', 2], ['12/02', 2], ['13/02', 2], ['14/02', 2], ['15/02', 2], ['16/02', 3], ['17/02', 3], ['18/02', 2], ['19/02', 3], ['20/02', 3], ['21/02', 2], ['22/02', 2], ['23/02', 1], ['24/02', 2], ['25/02', 3], ['26/02', 2], ['27/02', 3], ['28/02', 2], ['01/03', 2], ['02/03', 2], ['03/03', 2], ['04/03', 2], ['05/03', 3], ['06/03', 3], ['07/03', 3], ['08/03', 3], ['09/03', 2], ['10/03', 2], ['11/03', 3], ['12/03', 2], ['13/03', 2], ['14/03', 3], ['15/03', 2], ['16/03', 2], ['17/03', 2], ['18/03', 2], ['19/03', 3], ['20/03', 2], ['21/03', 2], ['22/03', 3], ['23/03', 3], ['24/03', 2], ['25/03', 3], ['26/03', 3], ['27/03', 3], ['28/03', 2], ['29/03', 3]]

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
