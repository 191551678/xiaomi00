





	/*换商标*/


	$('.logo').hover(function() {
		$('.logo2').animate({"margin-left": 0}, 100)
		$('.logo1').animate({"margin-left": 50}, 100)
	}, function() {
		$('.logo2').animate({"margin-left": -55}, 100)
		$('.logo1').animate({"margin-left": 0}, 100)
	});



	/*数量*/
	var d=1;
	$('.num-left').click(function(event) {
		d--;
		$('.ipt1').html(d)
		console.log(d)
	});
	$('.num-right').click(function(event) {
		d++;
		$('.ipt1').html(d)
		console.log(d)
	});
	// $('.num-btn').




	/*选择*/
	$('.i0').click(function(event) {
		if($(this).hasClass('icon-active')){
			$('.i1').removeClass('icon-active')
			$('.i0').removeClass('icon-active')
		}else{
			$('.i0').addClass('icon-active')
			$('.i1').addClass('icon-active')
		}
	});

	$('.i1').click(function(event) {
		if($(this).hasClass('icon-active')){
			$(this).removeClass('icon-active')
		}else{
			$(this).addClass('icon-active')
		}
		
	});

	/*删除*/
	// $('.x').click(function(event) {
	// 	$(this).parent("item-row").parent("item-table").parent("item-body").remove()
	// });
	


	$('.uls li').hover(function() {
		$(this).children('.s-2').show()
	}, function() {
		$(this).children('.s-2').hide()
	});
	$('.s-2').hover(function() {
		$(this).addClass('s-active')
	}, function() {
		$(this).removeClass('s-active')
	});





	// $(window).scroll(function(event) {
	// 	console.log($(window).scrollTop())

	// 	$('.last')


	// });
		