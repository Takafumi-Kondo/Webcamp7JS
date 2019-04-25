/*jQプログラムがhtml操作をするのでhtmlが読み込まれた後に実行する必要がある。
下記テンプレ*/
$(document).ready(function(){
	// jQで実行したいコードを
	$('body').html('<h1>Hello jQuery!!</h1>');
});
// テンプレ省略型。「bodyにh1というhtmlを入れろ」
$(function(){
	$('body').html('<h1>Hello jQuery!!</h1>');
});//セレクタ	 メソッド