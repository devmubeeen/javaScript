// for loading html document first

// syntax jQuery
// $('selector').function();

// $(document).ready(function(){

// })


$(document).ready(function () {
	// your jQuery code is here

	// syntax jQuery
	// $('selector').function();

	// select all th p element this is example of elements selectors
	console.log("we are using jquery");
	// console.log("i am in a new file");
	// syntax jQuery
	// $('selector').function();

	// ==================================
	$('p').click(function () {
		console.log('you clicked on p element', this);

		// 	// $('p').hide(); //click on p elements
		// 	// $(this).hide();
		// 	// $('#id').hide();
		// 	// $('.class').hide();
	});
	// ==================================

	// $('p').dblclick(function () {
	// 	console.log('you dblclick on p element', this);

	// 	// 	// $('p').hide(); //click on p elements
	// 	// 	// $(this).hide();
	// 	// 	// $('#id').hide();
	// 	// 	// $('.class').hide();
	// });
	// $('p').mouseenter(function () {
	// 	console.log("you are mouse enter event mode");
	// })
	// $('p').hover(function () {
	// 	console.log('you hoverd on this');
	// },
	// 	function () {
	// 		console.log('thanks for coming')
	// 	}
	// )


	// there are three main type of selector 
	// 1: id selector 
	// 2: class selector
	// 3: element selector

	// 1. element selector - this is an example of element selector which clicks on all p
	// $('p').click();

	// 2.Id selector - this is an example of id selector
	// $('#second').click();

	// 3.class selector - this is an example of id selector
	// $('.odd').click();

	// 4. $* clicks on the all elements
	// $('*').click();

	// element plus class selector
	// $('p.odd').click();


	// Events in jQuery
	// mouse events = click, dbclick, mouseenter, mouseleave
	// KeyboardEvent = keypress, keydown, MediaKeyStatusMap
	// form events = submit, change, focus, blur,
	// document/window events = load, resize, scroll, unload


	// =========================
	// $('p').on(
	// 	{
	// 		click: function () {
	// 			console.log('thanks for clicking event', this);
	// 		},
	// 		mouseleave: function () {
	// 			console.log("mouseLeave even")
	// 		}

	// 	}

	// )
	// =========================================
	// hide/show

	// $('#mubeen').hide(1000, function () {
	// 	console.log("hidden text")
	// })
	// $('#mubeen').show(function () {
	// 	console.log("show");
	// })

	$('#btn-toggle').click(function () {
		$('#mubeen').toggle(1000);
	})

	// fadeOut()
	// fadein()
	// fadeToggle()
	// fadeTo()
	// =========================================================
	// slide methods - speed and callback parameters is optional
	// $('#mubeen').slideUp(1000, function () {
	// 	console.log('done');
	// })
	// $('#mubeen').slideDown(1000)
	// $('#mubeen').slideToggle(1000)
	// =========================================================
	// $('#mubeen').animate({
	// 	opacity: 0.3,
	// 	height: '100px',
	// 	width: '350px'
	// }, 2000)// slow, fast, 2000 

	// $('#mubeen').animate({ opacity: 0.3 }, 4000);
	// $('#mubeen').animate({ opacity: 0.9 }, 1000);
	// $('#mubeen').animate({ width: '350px' }, 1000);
	// $('#mubeen').stop();
	// $('#mubeen').text("mr.mubeenbhatti@gmail.com")
	// $('#ta').val('setting it to mubeen');
	// $('#ta').html('setting it to mubeen');
	// $('#ta').empty();
	// $('#mubeen').empty();
	// $('#mubeen').text('you are good');
	// $('#mubeen').remove();
	// $('#mubeen').addClass('myClass');
	// $('#mubeen').removeClass('myClass2');
	// $('#mubeen').css('background-color', 'red');
	// $('#mubeen').css('background-color');

	// ===========================================
	// AJAX
	$.get('https://code.jquery.com/jquery-3.1.1.js', function (data, status) { alert(data); })
})


