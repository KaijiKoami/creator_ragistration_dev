import liff from '@line/liff'
import './style.css';

document.getElementsByClassName(res__box).style.display ="none";

document.addEventListener("DOMContentLoaded", function () {

	liff
		.init({
            liffId: '1657773262-O5ENDkKN'
        })
        .then(() => {
            initializeApp();
        })
        .catch((error) => {
            console.log(error)
        })

});

function initializeApp() {
    // ログインチェック
    if (liff.isLoggedIn()) {
        //ログイン済
        getLineData();
    } else {
        // 未ログイン
        let result = window.confirm("LINE Loginしますか？");
        if(result) {
            liff.login();
        }
    }
}

function getLineData() {
    liff.getProfile()
    .then(profile => {
		const userId = profile.userId;
		const displayName = profile.displayName;

		document.getElementById('useridfield').value = userId;
		document.getElementById('displayNamefield').value = displayName;
    })
}

document.getElementById('form').onsubmit = function (event) {
	// 再読み込み防止
	event.preventDefault();
	// 入力フォームの内容を取得
	let tiktokid = document.getElementById('form').content.value;
	// 入力内容を画面に出力
	document.getElementsByClassName('result_tiktokid').textContent = `${inputForm}`;

}