const inputText = document.getElementById("inputText");
const pushButton = document.getElementById("pushButton");
let username = '';

pushButton.addEventListener("click", function() {
    username = inputText.value;
    getLastCommitDate(username)
});

async function getLastCommitDate(username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GITHUB_API_KEY}})
        .then((response) => response.json())
        .then((data) => alert(data[0].created_at))
        .catch(error => console.log(error))
}





//
//
//
//
// async function getLastCommitDate(username) {
//     const response = await fetch(`https://api.github.com/users/${username}/events`);
//     const events = await response.json();
//     const commits = events.filter(event => event.type === "PushEvent");
//     const lastCommit = commits[0];
//     return lastCommit;
// }
