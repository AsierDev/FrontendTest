(function () {


    //stars: stargazers_count
    //forks: forks_count
    //url repos: html_url
    // name repos: name
    //document.getElementById("no-results").style.display = "flex";


    const picture = document.getElementById("picture")
    const infoUser = document.getElementById("info-user")
    const reposList = document.getElementById("repos-list")


    console.log("hola mundo")

    document.getElementById("form").addEventListener("submit", findUser);

    function findUser(e) {
        e.preventDefault();

        infoUser.innerHTML = '';
        reposList.innerHTML = '';


        const user = document.getElementById('search').value;

        gitHubApi.searchUser(user)
            .then(data => retrieveUser(data))
            .catch(err => console.error("error -->", err))

        gitHubApi.showRepos(user)
            .then(data => retrieveRepos(data))
            .catch(err => console.error("error -->", err))    


    }

    function retrieveUser(data) {
        console.log(data)

        picture.innerHTML = `<img src=${data.avatar_url} alt="avatar">` 

        infoUser.innerHTML += `<h5 id="username">@${data.login}</h5>` 

        infoUser.innerHTML += `<h1 id="fullname">${data.name}</h1>` 

        infoUser.innerHTML += data.bio ? `<p id="bio">${data.bio}</p>` : '<p id="bio"> No bio defined </p>'
        
    }

    function retrieveRepos(data) {
        console.log(data)
        data.map(repo => {
            return reposList.innerHTML += 
            `<li class="repos">
                <h3>
                    <a href=${repo.html_url} target="_blank" rel="noopener noreferrer">${repo.name}</a>
                </h3>
                 <div id="icons">
                    <img src="./images/stars.svg">${repo.stargazers_count}
                    <img src="./images/forks.svg">${repo.forks_count}
                </div>
            </li>
            <hr>`
        })

    }







})();
