$('#tab-contents .tab[id != "tab1"]').hide();
// tab1でないid要素。hide()で隠す
//デフォはtab1内容なのでその他は表示されないようにする
$('#tab-menu a').on('click', function() {
	// クリック時
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  // 現在のactive要素を削除
  $(this).addClass("active");
  // 最後に選択されたコンテンツ
  $($(this).attr("href")).show();

  // attr()で任意の属性値取得なので$(this).attr("href")で表示したいコンテンツid値に置き換わる
  return false;
});