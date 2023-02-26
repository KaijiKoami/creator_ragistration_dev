import liff from '@line/liff'
import './style.css';

document.addEventListener("DOMContentLoaded", function () {

	liff
		.init({
            liffId: '1660669373-ZEBMMMoo'
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

document.getElementById('result_tiktokid__box').style.display ="none";
document.getElementById('result_follower_count__box').style.display ="none";
document.getElementById('result_genre__box').style.display ="none";
document.getElementById('result_sex__box').style.display ="none";
document.getElementById('result_age__box').style.display ="none";
document.getElementById('result_residence__box').style.display ="none";
document.getElementById('Register').style.display ="none";
document.getElementById('go_back').style.display ="none";
