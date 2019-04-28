$(function() {
// クリック時の処理
  $('#back a').on('click',function(){
    $('body, html').animate({
      scrollTop:0
    }, 800);//slow normal fastなどもある
      return false;
  });

});

/* $('body, html').animate({scrollTop:0}, 800);
scrollTopはページ最上部 そこから0pxの位置まで800ミリ秒で移動する
*/