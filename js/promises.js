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


function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(`youll see this after ${num} miliseconds`);
        }, num);
    });
}


wait(1000).then((msg) => console.log(msg));
wait(3000).then((msg) => console.log(msg));
