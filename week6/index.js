let allRepos = []
let repoNames = []
window.addEventListener('load', getRepos)

function getRepos() {
    let xhr = new XMLHttpRequest(); // creat a request    
    xhr.open("GET", "https://api.github.com/orgs/HackYourFuture/repos"); // GET the request

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { //check if status = 200 && statusText = OK
            allRepos = JSON.parse(xhr.response)
            for (let i of allRepos) {
                let repoName = i.name.toLowerCase()
                repoNames.push(repoName)
            }
        }
    }
    xhr.send(null);
}
console.log(repoNames);



function displayRepos() {
    let reposDiv = document.getElementById("reposContainer");
    reposDiv.innerHTML = "";
    reposDiv.style.display = "block";

    let reposList = document.createElement("ol");
    reposDiv.appendChild(reposList);

    for (let i of allRepos) { //convert the dataObject to an Array
        let li = document.createElement("li");
        li.innerHTML = '<a href="' + i.url + '"target="_blank">' + i.name + '</a>';
        reposList.appendChild(li);
        let repoName = i.name.toLowerCase()
        repoNames.push(repoName)
    }
}

function checkValue(value) {
    let bool = false
    value = value.toLowerCase()
    for (let i = 0; i < repoNames.length; i++) {
        if (repoNames[i] === value) {
            bool = true
        }
    }
    return bool
}

function getApiByInput() {
    let searchField = document.getElementById('search');
    let searchValue = searchField.value;
    let url = "https://github.com/HackYourFuture/" + searchValue;
    if (checkValue(searchValue)) {
        window.open(url);
    } else {
        alert('The value ' + searchValue + ' is not a repo name.')
    }
}



let allUsers = []
let userNames = []


function getContrib() {
    let searchField = document.getElementById('search');
    let searchValue = searchField.value;
    
    let xhr = new XMLHttpRequest(); // creat a request    
    let conribUrl = "https://api.github.com/repos/HackYourFuture/" + searchValue +"/contributors";
    xhr.open("GET", conribUrl); // GET the request
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { //check if status = 200 && statusText = OK
            allUsers = JSON.parse(xhr.response)
            
            
                let userDiv = document.getElementById("contrContainer");
                userDiv.innerHTML = "";
                userDiv.style.display = "block";

                let usersList = document.createElement("ul");
                userDiv.appendChild(usersList);
                
                let userLi = document.createElement("li");
                usersList.appendChild(userLi);
                
                let avatarImg = document.createElement('img');
                 userDiv.appendChild(avatarImg);
            
            
            for (let i in allUsers) {
               console.log(allUsers[i].login);                         
                     userLi.innerHTML =  userLi.innerHTML + allUsers[i].login+ '<br>';
                
                    avatarImg.setAttribute('src', allUsers[i].avatar_url)
                    avatarImg.innerHTML = avatarImg.innerHTML + allUsers[i].avatar_url + '<br>';
            }
        }
    }
    xhr.send(null);
//    console.log(xhr.status);
//    console.log(xhr.statusText); 
//    window.open(conribUrl);
}














  

