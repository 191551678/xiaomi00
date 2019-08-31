/*轮播图banner定时器*/
$(function(){
	var timer;
	var i=0;

	$('.logo').hover(function() {
		$('.logo2').animate({"margin-left": 0}, 100)
		$('.logo1').animate({"margin-left": 50}, 100)
	}, function() {
		$('.logo2').animate({"margin-left": -55}, 100)
		$('.logo1').animate({"margin-left": 0}, 100)
	});
	
	$('.toptop').css('visibility', 'hidden');

	function go(){
		clearInterval(timer);
		timer=setInterval(function(){
			i++;
			if(i>4){i=0;}
			$('.banner-bg').children('li').eq(i).fadeIn().siblings('li').fadeOut();
			$('.banner-bottom').children('li').eq(i).addClass('banner-active').siblings('li').removeClass('banner-active');

		},3000)
	}
	go();
	$('.banner1').hover(function() {
		clearInterval(timer);
	}, function() {
		go();
	});

	/*轮播图banner事件*/
	$('.banner-bottom').children('li').click(function(){
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
		// console.log(i)
		$('.list1 div').eq(i).css('display', 'block').siblings('div').css('display', 'none');
	}, function() {
		$('.list1 div').eq(i).css('display', 'none').siblings('div').css('display', 'block');
	});





	/*头部换商品*/
	var n=null;
	var z;
	var arr=[[{'src':'images/header-ul1-1.png',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'images/header-ul1-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'images/header-ul1-3.png',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'images/header-ul1-4.png',
		'title':'小米9',
		'price':'2599元起'},{'src':'images/header-ul1-5.png',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'images/header-ul1-6.png',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'images/header-ul2-1.jpg',
		'title':'Redmi&nbsp;K20&nbsp;Pro',
		'price':'2299元起'},{'src':'images/header-ul2-2.jpg',
		'title':'Redmi&nbsp;K20',
		'price':'1999元起'},{'src':'images/header-ul2-3.jpg',
		'title':'Redmi&nbsp;Note7&nbsp;Pro',
		'price':'1399元起'},{'src':'images/header-ul2-4.jpg',
		'title':'Redmi&nbsp;7A',
		'price':'579元起'},{'src':'images/header-ul2-5.png',
		'title':'Redmi&nbsp;Note7',
		'price':'999元起'},{'src':'images/header-ul2-6.png',
		'title':'Redmi',
		'price':'699元起'}],
		[{'src':'images/header-ul3-1.png',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'images/header-ul3-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'images/header-ul3-3.jpg',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'images/header-ul3-4.jpg',
		'title':'小米9',
		'price':'2599元起'},{'src':'images/header-ul3-5.jpg',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'images/header-ul3-6.jpg',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'images/header-ul4-1.png',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'images/header-ul4-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'images/header-ul4-3.png',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'images/header-ul4-4.png',
		'title':'小米9',
		'price':'2599元起'},{'src':'images/header-ul4-5.png',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'images/header-ul4-6.png',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'images/header-ul1-1.png',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'images/header-ul1-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'images/header-ul1-3.png',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'images/header-ul1-4.png',
		'title':'小米9',
		'price':'2599元起'},{'src':'images/header-ul1-5.png',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'images/header-ul1-6.png',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'images/header-ul6-1.jpg',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'images/header-ul6-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'images/header-ul6-3.jpg',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'images/header-ul6-1.jpg',
		'title':'小米9',
		'price':'2599元起'},{'src':'images/header-ul6-2.png',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'images/header-ul6-3.jpg',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'images/header-ul7-1.jpg',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'images/header-ul7-2.jpg',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'images/header-ul7-3.jpg',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'images/header-ul7-4.jpg',
		'title':'小米9',
		'price':'2599元起'},{'src':'images/header-ul7-1.jpg',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'images/header-ul7-2.jpg',
		'title':'小米CC9',
		'price':'1799元起'}]]

	$('.header-uls>li').hover(function() {
			
			n=$(this).index();
			console.log(n)
			if(n<7&&n>-1){
				$('.header-ul1 ul').stop().slideDown()
				$('.header-ul1 ul').html('')
				for(var a=0;a<arr[n].length;a++){
					var tag=`<li class="xian">
									<a href="#">
										<img src="${arr[n][a].src}" alt="">
										<p class="title">${arr[n][a].title}</p>
										<p class="price">${arr[n][a].price}</p>
									</a>
							</li>`
					$('.header-ul1 ul').html($('.header-ul1 ul').html()+tag)
					$('.header-ul1 ul').children('li').eq(5).removeClass('xian')
				}
			}else{
				$('.header-ul1').stop().slideUp()
			}
	}, function() {

	});


	$('.header-down').hover(function() {

		$('.header-ul1').stop().slideDown()
	}, function() {
		$('.header-ul1').stop().slideUp()
		
	});


	/*换商品*/
	var x=0;
	$('.tab-list-1 li').mouseenter(function(event) {
		x=$(this).index();
		$(this).addClass('tab-active').siblings('li').removeClass('tab-active')
		if(x==0){
			$('#a1').show().siblings('#a2').hide();
		}else{
			$('#a2').show().siblings('#a1').hide();
		}
	});
		$('.tab-list-2 li').mouseenter(function(event) {
		x=$(this).index();
		$(this).addClass('tab-active').siblings('li').removeClass('tab-active')
		if(x==0){
			$('#b1').show().siblings('#b2').hide();
		}else{
			$('#b2').show().siblings('#b1').hide();
		}
	});
		$('.tab-list-3 li').mouseenter(function(event) {
		x=$(this).index();
		$(this).addClass('tab-active').siblings('li').removeClass('tab-active')
		if(x==0){
			$('#c1').show().siblings('#c2').hide();
		}else{
			$('#c2').show().siblings('#c1').hide();
		}
	});
		$('.tab-list-4 li').mouseenter(function(event) {
		x=$(this).index();
		$(this).addClass('tab-active').siblings('li').removeClass('tab-active')
		if(x==0){
			$('#d1').show().siblings('#d2').hide();
		}else{
			$('#d2').show().siblings('#d1').hide();
		}
	});


	/*aside*/
	var n;
		$('.aside-right li').hover(function() {
		n=$(this).index();
		$('.aside-right li').eq(n).children('div').children('img').eq(0).addClass('noblock').siblings('img').removeClass('noblock')
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.aside-right li').eq(n).children('div').children('img').eq(0).removeClass('noblock').siblings('img').addClass('noblock')
	});

	$(window).scroll(function(event) {
		var q;
		q=$(window).scrollTop();
		if(q>900){
			$('.toptop').css('visibility', 'visible');

			// $('.toptop')[0].style.visibility="visible";
		}else{
			$('.toptop').css('visibility', 'hidden');
 			// $('.toptop')[0].style.visibility="hidden";
		}
		
	});
	$('.toptop').click(function(event) {
		// $('html.body').animate({'scrollTop':0},500);
		$('html,body').scrollTop(0)
	});



	

	/*购物车*/

	$('.nav-top-right1').hover(function() {
		$('.nav-top-right1 a').css({
			'background-color': '#fff'
		});
		$('.nav-top-right1 span').css({
			'color': '#ff6700'
		});
		$('.nav-shop').slideDown(200)
	}, function() {
		$('.nav-top-right1 a').css({
			'background-color': ''
		});
		$('.nav-top-right1 span').css({
			'color': ''
		});
		$('.nav-shop').slideUp(200)
	});










})
	