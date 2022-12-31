import './style.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function () {
    liff
        .init({ 
            liffId: "1657773262-O5ENDkKN",
            withLoginOnExternalBrowser: true,
        })
        .then(() => {
            console.log("Success! you can do something with LIFF API here.")
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
