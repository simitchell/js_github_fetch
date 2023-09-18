'use strict'

const gitUserInfo = document.querySelector('#returnInfo');

// const returnInfo = getWithAwait(apiUrl);
//     showInfo(returnInfo.value, gitUserInfo);

const gitHubFormEl = document.querySelector('#gitHubForm');

document.addEventListener("DOMContentLoaded", async function () {
    console.log("DOM IS READY. HAVE A CORONA.  IN HERE, WE FAMILY.");

    const submitButton = document.getElementById('btn1');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        const newUser = document.getElementById('newUser').value;
        const apiUrl = `https://api.github.com/users/${newUser}`
        console.log(apiUrl);
        console.log(newUser);
        getWithAwait(apiUrl);
        // document.getElementById('#returnInfo')
    });
});