'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const languages = users.filter(user => user.languages.length >= 3)
console.log(languages);

//3. Use .map to create an array of strings where each element is a user's email address
const email = users.map(user => user.email);
console.log(email);

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalExperience = users.reduce((experience, users) => {
    return experience + users.yearsOfExperience;
}, 0);
console.log(totalExperience);

console.log(totalExperience / users.length);

//5. Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((currentLongest, user) => {
    if (user.email.length > currentLongest.email.length)

)}, users[0])






