/* マウスカーソル重なると色変化
$(function(){
	$('.box1').mouseover(function(){
		$('.box1').css({'background-color': '#0000FF'});
	});

	$('.box1').mouseout(function(){
		$('.box1').css({'background-color': '#FF0000'});
	});
});
*/

/* class追加削除を使えば記述を短縮できる。
$(function(){
	$('.box1').mouseover(function(){
		$('.box1').addClass('box1-ext');
	});
	$('.box1').mouseout(function(){
		$('.box1').removeClass('box1-ext');
	});
});
*/

//マウスクリック時動作。on('click', function(){〜〜〜
$(function(){
	$('.box1').on('click', function(){
		$('.box1').addClass('box1-ext');
	});
	$('.box1').mouseout(function(){
		$('.box1').removeClass('box1-ext');
	});
});