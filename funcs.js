document.getElementById('Confirm').addEventListener('click', ()=>{

	// tiktokid取得
	const tiktokid = document.getElementById("tiktokid").value;

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
	let sex = 0;

	for(let i = 0; i < sexes.length; i++){
		if(sexes[i].checked){ // ⑤
			sex = sexes[i].value; // ⑥
		}
	}

	// 年齢取得
	const age = document.getElementById("age").value;

	// 居住地
	const options_index = document.creator_form.residence.selectedIndex;
	const residence = document.creator_form.residence.options[options_index].value;

	//値の表示
	document.getElementById("result_tiktokid").textContent = tiktokid;
	document.getElementById("result_genre").textContent = genre;
	document.getElementById("result_sex").textContent = sex;
	document.getElementById("result_age").textContent = age;
	document.getElementById("result_residence").textContent = residence;

	//表示変換
	document.getElementById('tiktokid__box').style.display ="none";
	document.getElementById('result_tiktokid__box').style.display ="";

	document.getElementById('genre__box').style.display ="none";
	document.getElementById('result_genre__box').style.display ="";

	document.getElementById('sex__box').style.display ="none";
	document.getElementById('result_sex__box').style.display ="";

	document.getElementById('age__box').style.display ="none";
	document.getElementById('result_age__box').style.display ="";

	document.getElementById('residence__box').style.display ="none";
	document.getElementById('result_residence__box').style.display ="";

	document.getElementById('Confirm').style.display ="none";

	document.getElementById('Register').style.display ="";

	document.getElementById('go_back').style.display ="";
})