(function () {


    //stars: stargazers_count
    //forks: forks_count

    console.log("hola mundo")
    
    document.getElementById("form").addEventListener("submit", findUser);

    function findUser(e) {
        e.preventDefault();

        const user = document.getElementById('search').value;

         gitHubApi.searchUser(user)
            .then(res => res.json())
            .then(data => console.log(data))

       /*  gitHubApi.showRepos('asierdev', 'repos')
            .then(res => res.json())
            .then(data => console.log(data))    */

    }



})();
