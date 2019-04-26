/*上からスライド 青色に変更 スライドアップ
show()の表示時間設定*/


$(function(){
    $('.box1').slideDown(function() {
        $('.box1').css({
            'background-color': 'blue',
            'width': '200px',
            'height': '100px'
        }).slideUp(1000);
    });
});