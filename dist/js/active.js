$(function () {

	// var note = $('#note'),
	// 	ts = new Date(2022, 12, 1),
	// 	newYear = false;

	// if ((new Date()) > ts) {
	// 	// The new year is here! Count towards something else.
	// 	// Notice the *1000 at the end - time must be in milliseconds
	// 	ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
	// 	newYear = false;
	// }

	// $('#countdown').countdown({
	// 	timestamp: new Date(2022, 12, 1),
	// 	callback: function (days, hours, minutes, seconds) {

	// 		var message = "";

	// 		message += days + " day" + (days == 1 ? '' : 's') + ", ";
	// 		message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
	// 		message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
	// 		message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";

	// 		if (newYear) {
	// 			message += "left until the new year!";
	// 		} else {
	// 			message += "left to 10 days from now!";
	// 		}

	// 		note.html(message);
	// 	}
	// });

	$('#countdown').countdown('2022/12/1', function (event) {

		const months = event.strftime('%m');
		const days = event.strftime('%D');
		const hours = event.strftime('%H');
		const minutes = event.strftime('%M');
		const seconds = event.strftime('%S');
		const countdown = this;


		var message = [{
			n: 'Days',
			v: days
		}, {
			n: 'Hours',
			v: hours
		}, {
			n: 'Minutes',
			v: minutes
		}, {
			n: 'Seconds',
			v: seconds
		}].map(time => {
			return $('<span class="counts col-md-1">').html(
				`
					<span class="digit static">${time.v}</span>
					<span class="unit">${time.n}</span>
				`
			)
		})

		// var message = `
		// 	<div class="col-md-3 note d-flex text-white ">${days} <span> dias</span></div>
		// `;

		// message += event.strftime('%m meses');
		// message += event.strftime('%d dias');
		// message += event.strftime('%H Horas');
		// message += event.strftime('%M minutos');
		// message += event.strftime('%S Segundos') + " <br />";

		$(this).html(message);
	});

});


// $.each(['Days','Hours','Minutes','Seconds'],function(i){
// 	$('<span class="count'+this+'">').html(
// 		'<span class="position">\
// 			<span class="digit static">0</span>\
// 		</span>\
// 		<span class="position">\
// 			<span class="digit static">0</span>\
// 		</span>'
// 	).appendTo(elem);