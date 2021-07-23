'use strict';

//2.
function getUserInfo() {
    return fetch('https://api.github.com/users/brichards30/events',
        {headers: {'Authorization': promisesGithubAPI}})
        .then((response) => response.json());
}

//3. Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made
getUserInfo()
    .then((userData) => {
        let latestCommit = userData[0].created_at;
        console.log(latestCommit);
    })
    .catch((error) => {
        console.log('ERROR!', error);
        return Promise.reject();
    })

//Create Your Own Promise

function wait(number) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('SUCCESS!');
        }, number);
    })
}

wait(4000).then((response) => {
    console.log(response)
});





