$(function(){
// menu-triggerがクリックされた時の処理
	$('.menu-trigger').on('click', function(){
		$(this).toggleClass('active');
		$('#sp-menu').fadeToggle();
		return false;
	});
});

/* toggleClass()はjQueryのメソッド。
指定したclassの追加削除の切替をする。繰り返す
・thisはクリックされた要素
・fadeToggle()を使ってハンバーガーメニュー開いた時の内容表示
不透明度アニメーションtともに要素の表示非表示を切替する
*/