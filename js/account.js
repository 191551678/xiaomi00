/*
* @Author: hp
* @Date:   2019-08-23 10:12:45
* @Last Modified by:   hp
* @Last Modified time: 2019-08-23 12:27:45
*/
$(function(){
	var i=0;

	/*账号登陆*/
	 $('.zh').click(function(){
	 	$('.zh').addClass('now').siblings('a').removeClass('now')
	 	$('.box1').show()
	 	$('.box2').hide()
	 	$('.box1-1').show()
	 	$('.box1-2').hide()
	 	$('.phe1 span').animate({'opacity': 0}, 200)
	 })
	 /*二维码*/
	  $('.ma').click(function(){
	 	$('.ma').addClass('now').siblings('a').removeClass('now')
	 	$('.box2').show()
	 	$('.box1').hide()
	 })
	  /*手机号码登陆*/
	   $('.custom a').click(function(){
	 	if($('.box1-2').css('display')=='block'){
	 		$('.phe1 span').animate({'opacity': 0}, 200)
	 	}else{
	 		$('.phe1 span').animate({'opacity': 1}, 200)
	 	}
	 	$('.box1-2').toggle();
	 	$('.box1-1').toggle();	 	
	 })




})	