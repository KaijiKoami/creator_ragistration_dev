import './style.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function () {
    liff
        .init({ liffId: process.env.LIFF_ID })
        .then(() => {
            console.log("Success! you can do something with LIFF API here.")
        })
        .catch((error) => {
            console.log(error)
        })
    liff
        .getProfile()
        .then((profile) => {
            const name = profile.displayName;
        })
        .catch((err) => {
            console.log("error", err);
        });
        document.getElementById('useridfield').value = data.context.userId;
});
