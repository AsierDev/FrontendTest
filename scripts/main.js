(function () {


    //stars: stargazers_count
    //forks: forks_count
    //document.getElementById("no-results").style.display = "flex";

    //document.getElementById("picture").innerHTML(`<img src=${userData.avatar_url} alt="avatar">`)


    console.log("hola mundo")

    document.getElementById("form").addEventListener("submit", findUser);

    function findUser(e) {
        e.preventDefault();

        const user = document.getElementById('search').value;

        gitHubApi.searchUser(user)
            .then(res => res.ok ? res.json() : showError())
            .then(data => retrieveUser(data))


        /*  gitHubApi.showRepos('asierdev', 'repos')
        .then(res => res.json())
        .then(data => console.log(data))    */

    }

    function retrieveUser(data) {
        console.log(data)
        document.getElementById("picture").innerHTML = `<img src=${data.avatar_url} alt="avatar">`

        data.login ? document.getElementById("username").innerHTML = data.login : document.getElementById("username").innerHTML = 'No username defined'

        data.name ? document.getElementById("fullname").innerHTML = data.name : document.getElementById("fullname").innerHTML = 'No name defined'

        data.bio ? document.getElementById("bio").innerHTML = data.bio : document.getElementById("bio").innerHTML = 'No bio defined'
    }

    function showError() {
        console.log("show error")
    }







})();
