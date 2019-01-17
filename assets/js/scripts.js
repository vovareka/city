
(function(){

	new fullpage('#fullpage', {
		paddingTop: '0px',
		paddingBottom: '0px',
		navigation: true,
		navigationPosition: 'left',
		scrollOverflow: true,
		responsiveWidth: 767,
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		anchors: ['page1',],
		onLeave: function(origin,destination){
			console.log(destination.index);
			if(destination.index == 1) {
				$('.animated1').addClass("fadeInUp");
				$('.animated2').addClass("fadeInUp");
				$('.animated3').addClass("fadeInUp");
				$('.half_circle').addClass("circleAnimate");
				$('.sec2-anim').addClass('fixedImgAnim');
			}
			if(destination.index == 2) {
				$('.animated4').addClass("fadeInUp");
				$('.animated5').addClass("fadeInUp");
				$('.animated6').addClass("fadeInUp");
				$('.sec3-anim').addClass('fixedImgAnim');
			}
			if(destination.index == ($('#fullpage .section').length - 1)) {
				console.log('end');
				$('.btn_down').addClass('hidden');
				$('.btn_up').addClass('hide');
			}
			else {
				$('.btn_down').removeClass('hidden');	
				$('.btn_up').removeClass('hide');	
			}
		}
	});
})();  

$(document).ready(function(){
	$('.phone-mask').mask('+38(000) 00-00-000');
	var $timer, i = 0;
	function start(param) {
		var $listElement = $('.circle_items li');
		if(param) {
			i = 1;
			$listElement.removeClass('active').filter($listElement[0]).addClass('active');
		}
		if ($timer) {
			return false;
		}
		$timer = setInterval(function() {
			$listElement.removeClass('active').filter($listElement[i]).toggleClass('active');
			i < $listElement.length - 1 ? i++ : i = 0;
		}, 4000);
		var $elem = $('.circle_items');
		$elem.mouseenter(function(){stop()});
		$elem.mouseleave(function(){start(true)});
	}
	function stop() {
		if ($timer) {
			$('.circle_items li').removeClass('active');
			clearInterval($timer);
			$timer = null;
		}
	}
	start();
	});

$(document).on('click', '.btn_down', function(){
  fullpage_api.moveSectionDown();
});
$(document).on('click', '.btn_up', function(){
  fullpage_api.moveTo('page1');
});
$(document).on('click', '.open', function(){
  $('.popup').addClass('open_popup');
});
$(document).on('click', '.close', function(){
  $('.popup').removeClass('open_popup');
});