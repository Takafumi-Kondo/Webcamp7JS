/*jQプログラムがhtml操作をするのでhtmlが読み込まれた後に実行する必要がある。
下記テンプレ*/
/*
$(document).ready(function(){
	// jQで実行したいコードを
	$('body').html('<h1>Hello jQuery!!</h1>');
});
// テンプレ省略型。「bodyにh1というhtmlを入れろ」
$(function(){
	$('body').html('<h1>Hello jQuery!!</h1>');
});//セレクタ	 メソッド
*/

/*要素ダウン
$(function(){
  $('.box1').slideDown();
});
*/

/*要素アップ
$(function(){
  $('.box1').slideUp();
});
*/


/*要素表示
$(function(){
  $('.box1').show();
  $('.box1').css({'background-color': '#0000FF'});
});*/

/*要素非表示
$(function(){
	$('.box1').hide();
});
*/