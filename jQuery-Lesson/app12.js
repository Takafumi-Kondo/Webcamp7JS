API_KEY = "b4b18c820ac4cb9036d622adbb54acfd";

$(function(){
	$('#btn').on('click', function() {
		// 入力された都市名でwebAPIに天気情報リク
		$.ajax({																						//APIキー　ここは繋げる
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=b4b18c820ac4cb9036d622adbb54acfd",
			dataType : 'jsonp',

		}).done(function (data){
			//通信成功処理
			$('#place').text(data.name);//位置
			$('#tem_max').text(data.main.temp_max);//最高気温
			$('#temp_min').text(data.main.temp_min);//最低気温
			$('#humidity').text(data.main.humidity);//湿度
			$('#speed').text(data.wind.speed);//風速
			$('#weather').text(data.weather[0].main);//天気
			// 天気アイコン
			$('img').attr('src','http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
			$('img').attr('alt',data.weather[0].main);
		}).fail(function (data) {
       //通信失敗
　　　　alert('通信に失敗しました。');
		});
	});
});