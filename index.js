import liff from '@line/liff'
import './style.css';

document.addEventListener("DOMContentLoaded", function () {

    liff.init({ 
            liffId: '1657773262-O5ENDkKN'
        })
        .then(() => {
            initializeApp();
        })
        .catch((error) => {
            console.log(error)
        })

    // liff
    //     .getProfile()
    //     .then((profile) => {
    //         const name = profile.displayName;
    //     })
    //     .catch((err) => {
    //         console.log("error", err);
    //     });
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
    })
}
