'use strict';

async function getWithAwait(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // CALLING DISPLAYINFO FUNCTION
        displayInfo(data);
        return data;
    } catch (error) {
        console.error('Error In Try/Catch: ', error);
    }
};


// A FUNCTION TO DISPLAY THE DATA INTO THE INNERTEXT I WANT TO

function displayInfo(a) {
    console.log(a);
    const userImage = document.getElementById('userImage');
    const selectNameEl = document.getElementById('returnName');
    const selectUserNameEl = document.getElementById('returnUserName');
    const selectReposEl = document.getElementById('returnRepos');
    const selectFollowersEl = document.getElementById('returnFollowers');
    const selectFollowingEl = document.getElementById('returnFollowing');
    userImage.src = a.avatar_url;
    selectNameEl.innerText = a.name;
    selectUserNameEl.innerText = a.login;    
    selectReposEl.innerText = a.public_repos;
    selectFollowersEl.innerText = a.followers;
    selectFollowingEl.innerText = a.following;
};