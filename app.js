var user_hand = prompt('じゃんけん。選ぶ');
//未条件なら最初に戻るはできないので!=内のループを作って !=以外なら脱出whileを作る
while((user_hand != 'グー') && (user_hand != 'チー') && (user_hand != 'パー') && (user_hand != null)){
	alert('エラー');
	var user_hand = prompt('じゃんけん。もう一度選ぶ');
}

var js_hand = getJShand();// 関数呼び出しランダム生成
// 互いの手を比べる関数読んで結果をjudgeへ
var judge = winLose(user_hand, js_hand);

// ------------------------- 結界 ------------------------------
if(user_hand == null){
	alert('またね');
}else{
	alert('選んだ手は' + user_hand + 'です。相手は' + js_hand +'です。結果' + judge);
}



// 相手のじゃんけんランダム生成
function getJShand(){
/* Math.randomで0〜1未満の少数なので*3。floorで少数切り捨て
なので0〜2がくる */
	var js_hand_num = Math.floor(Math.random() * 3);
	var hand; //下の生成された手をここに

	if(js_hand_num == 0){
		hand = "グー";
	}else if(js_hand_num == 1){
		hand = "チー";
	}else if(js_hand_num == 2){
		hand = "パー";
	}
	return hand;
}


// じゃんけんを比べる関数
function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チー"){
			winLoseStr = "勝ち";
		}else if(js == "パー"){
			winLoseStr = "負け";
		}
	}else if(user == "チー"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チー"){
			winLoseStr = "あいこ";
		}else if(js == "パー"){
			winLoseStr = "勝ち";
		}
	}else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち"
		}else if(js == "チー"){
			winLoseStr = "負け";
		}else if(js == "パー"){
			winLoseStr = "あいこ";
		}
	}

	return winLoseStr;
}














