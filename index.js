import liff from '@line/liff'
import './style.css';

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

document.getElementById('Confirm').addEventListener('click', ()=>{

	// tiktokid取得
	const tiktokid = document.querySelector('input[type=text][name=tiktokid]').value

	// ジャンル取得
	const genres = document.getElementsByName("genre");
	let count = 0;
	for (let i = 0; i < genres.length; i++) {
		if (genres[i].checked) {
			count++;
			genre = genres[i].value;
		}
	}
	if (count < 1) {
		window.alert("ジャンルを1つ以上選択してください。");
		return false;
	};

	// 性別取得
	const sexes = document.getElementsByName('sex');

	for(let i = 0; i < sexes.length; i++){
		if(sexes[i].checked){ // ⑤
			sex += sexes[i].value; // ⑥
		}
	}

	// 年齢取得
	const age = document.querySelector('input[type=number][name=age]').value

	// 居住地
	const options_index = document.creator_form.residence.selectedIndex;
	const residence = document.creator_form.residence.options[num].value;

	//値の表示
	document.getElementById("result_tiktokid").textContent = tiktokid;
	document.getElementById("result_genre").textContent = genre;
	document.getElementById("result_sex").textContent = sex;
	document.getElementById("result_age").textContent = age;
	document.getElementById("result_residence").textContent = residence;

	//表示変換
	document.getElementById('tiktokid').style.visibility = 'hidden';
	document.getElementById('result_tiktokid').style.visibility = 'visible';

	document.getElementById('genre').style.visibility = 'hidden';
	document.getElementById('result_genre').style.visibility = 'visible';

	document.getElementById('sex').style.visibility = 'hidden';
	document.getElementById('result_sex').style.visibility = 'visible';

	document.getElementById('age').style.visibility = 'hidden';
	document.getElementById('result_age').style.visibility = 'visible';

	document.getElementById('residence').style.visibility = 'hidden';
	document.getElementById('result_residence').style.visibility = 'visible';

	document.getElementById('Confirm').style.visibility = 'hidden';

	document.getElementById('Register').style.visibility = 'visible';

	document.getElementById('go_back').style.visibility = 'visible';
})