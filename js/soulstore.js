$(function(){
	var i=0;
	var timer;

	/*轮播图banner定时器*/
	function go(){
		clearInterval(timer);
		timer=setInterval(function(){
			i++;
			if(i>4){i=0;}
			$('.banner-bg').children('li').eq(i).fadeIn().siblings('li').fadeOut();
			$('.banner-bottom').children('li').eq(i).addClass('banner-active').siblings('li').removeClass('banner-active');

		},1000)
	}
	go();
	$('.banner1').hover(function() {
		clearInterval(timer);
	}, function() {
		go();
	});

	/*轮播图banner事件*/
	$('.banner-bottom').children('li').mouseover(function(){
		i=$(this).index();
		$('.banner-bg').children('li').eq(i).fadeIn().siblings('li').fadeOut();
		$(this).addClass('banner-active').siblings('li').removeClass('banner-active');
	})
	$('.banner-bt1').click(function(){
		i--;
		if(i<0){i=4}
		if(i>4){i=0;}
		$('.banner-bg').children('li').eq(i).fadeIn().siblings('li').fadeOut();
		$('.banner-bottom').children('li').eq(i).addClass('banner-active').siblings('li').removeClass('banner-active');
	})
	$('.banner-bt2').click(function(){
		i++;
		if(i<0){i=4;}
		if(i>4){i=0;}
		$('.banner-bg').children('li').eq(i).fadeIn().siblings('li').fadeOut();
		$('.banner-bottom').children('li').eq(i).addClass('banner-active').siblings('li').removeClass('banner-active');
	})

	/*list*/
	$('.ol').children('li').hover(function() {
		i=$(this).index();
		console.log(i)
		$('.list1 div').eq(i).fadeIn().siblings('div').css('display', 'none');
	}, function() {
		$('.list1 div').eq(i).fadeOut().siblings('div').css('display', 'block');
	});



$(window).scroll(function(event) {
				console.log($(window).scrollTop() )
				var h=$(window).scrollTop()
				if(h>800){
					$('nav').addClass('navbar-fixed-top')
					$('nav').removeClass('navbar-static-top')
				}else{
					$('nav').addClass('navbar-static-top')
					$('nav').removeClass('navbar-fixed-top')
				}
				
			});


// 模态框
$('.denglu').click(function() {
		$('.mt11').fadeIn();
		var timer1;
		$('body').css('overflow', 'hidden');

	});

	$('.mt23').click(function(){
		$('.mt23').css('display', 'none');
	})
	$('.mt11 h2').click(function(){
		$('.mt11').fadeOut();
		$('body').css('overflow', '');
	})

})


