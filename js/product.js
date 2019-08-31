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
		
	/*list*/
	$('.ol').children('li').hover(function() {
		i=$(this).index();
		// console.log(i)
		$('.list1 div').eq(i).css('display', 'block').siblings('div').css('display', 'none');
	}, function() {
		$('.list1 div').eq(i).css('display', 'none').siblings('div').css('display', 'block');
	});


	$('.header-uls-l').hover(function() {
		$('.list1').show()
	}, function() {
		$('.list1').hide()
	});




	/*头部换商品*/
	var n=null;
	var z;
	var arr=[[{'src':'../images/header-ul1-1.png',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'../images/header-ul1-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'../images/header-ul1-3.png',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'../images/header-ul1-4.png',
		'title':'小米9',
		'price':'2599元起'},{'src':'../images/header-ul1-5.png',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'../images/header-ul1-6.png',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'../images/header-ul2-1.jpg',
		'title':'Redmi&nbsp;K20&nbsp;Pro',
		'price':'2299元起'},{'src':'../images/header-ul2-2.jpg',
		'title':'Redmi&nbsp;K20',
		'price':'1999元起'},{'src':'../images/header-ul2-3.jpg',
		'title':'Redmi&nbsp;Note7&nbsp;Pro',
		'price':'1399元起'},{'src':'../images/header-ul2-4.jpg',
		'title':'Redmi&nbsp;7A',
		'price':'579元起'},{'src':'../images/header-ul2-5.png',
		'title':'Redmi&nbsp;Note7',
		'price':'999元起'},{'src':'../images/header-ul2-6.png',
		'title':'Redmi',
		'price':'699元起'}],
		[{'src':'../images/header-ul3-1.png',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'../images/header-ul3-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'../images/header-ul3-3.jpg',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'../images/header-ul3-4.jpg',
		'title':'小米9',
		'price':'2599元起'},{'src':'../images/header-ul3-5.jpg',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'../images/header-ul3-6.jpg',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'../images/header-ul4-1.png',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'../images/header-ul4-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'../images/header-ul4-3.png',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'../images/header-ul4-4.png',
		'title':'小米9',
		'price':'2599元起'},{'src':'../images/header-ul4-5.png',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'../images/header-ul4-6.png',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'../images/header-ul1-1.png',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'../images/header-ul1-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'../images/header-ul1-3.png',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'../images/header-ul1-4.png',
		'title':'小米9',
		'price':'2599元起'},{'src':'../images/header-ul1-5.png',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'../images/header-ul1-6.png',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'../images/header-ul6-1.jpg',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'../images/header-ul6-2.png',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'../images/header-ul6-3.jpg',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'../images/header-ul6-1.jpg',
		'title':'小米9',
		'price':'2599元起'},{'src':'../images/header-ul6-2.png',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'../images/header-ul6-3.jpg',
		'title':'小米CC9',
		'price':'1799元起'}],
		[{'src':'../images/header-ul7-1.jpg',
		'title':'小米CC9',
		'price':'1799元起'},{'src':'../images/header-ul7-2.jpg',
		'title':'小米CC9e',
		'price':'1599元起'},{'src':'../images/header-ul7-3.jpg',
		'title':'小米CC9美图定制版',
		'price':'2599元起'},{'src':'../images/header-ul7-4.jpg',
		'title':'小米9',
		'price':'2599元起'},{'src':'../images/header-ul7-1.jpg',
		'title':'小米mix3',
		'price':'2599元起'},{'src':'../images/header-ul7-2.jpg',
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




	/*第十一屏放大*/

	$('.play').click(function(event) {
		$('.video-ai1').show()
		$('.video-ai1').css('width', '1200px');	



	});

	




	

		new WOW().init();

		$(window).scroll(function(event) {
			// console.log($(window).scrollTop())
			var x=$(window).scrollTop();
			if($(window).scrollTop()>200){
				$('.fix').addClass('fixed')
			}else{
				$('.fix').removeClass('fixed')
			}
		});
		







})
	