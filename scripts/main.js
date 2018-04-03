(function () {


    //stars: stargazers_count
    //forks: forks_count
    //document.getElementById("no-results").style.display = "flex"; 
    
    
    console.log("hola mundo")
    let userData;
    
    document.getElementById("form").addEventListener("submit", findUser);

    function findUser(e) {
        e.preventDefault();

        const user = document.getElementById('search').value;

        userData = gitHubApi.searchUser(user)
            .then(res => res.json())
            


            
            console.log(userData)   
            
            
            /*  gitHubApi.showRepos('asierdev', 'repos')
            .then(res => res.json())
            .then(data => console.log(data))    */
            
        }
        



})();
