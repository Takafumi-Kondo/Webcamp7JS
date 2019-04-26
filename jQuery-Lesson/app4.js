/*thisはイベントを検知してその要素だけを変化させたい時に利用
クリック時にslideUpさせるアニメーションを*/
/*
$(function(){
	$('.bg1').on('click', function(){
		$('.bg1').slideUp();
	});
	$('.bg2').on('click', function(){
		$('.bg2').slideUp();
	});
	$('.bg3').on('click', function(){
		$('.bg3').slideUp();
	});
	$('.bg4').on('click', function(){
		$('.bg4').slideUp();
	});
}); */


/* thisとchildren
thisはイベント検知(今回はクリック)してそれに適応させる。上記の内容を短縮できる。
*/
$(function(){
	$('.box1').on('click', function(){
		$(this).slideUp();
	});
});

//$('ul').children()でulの子(h3 li)を示してる
$(function(){
	$('button').on('click', function(){
		$('ul').children().css('color', 'red');
	});
});
