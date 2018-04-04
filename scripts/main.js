
(function () {
    
    document.getElementById('form').addEventListener('submit', findUser);

    function findUser(e) {
        e.preventDefault();

        infoUser.innerHTML = '';
        reposList.innerHTML = '';
        picture.innerHTML = '';
        reposView.style.display = 'none';       

        const user = document.getElementById('search').value;

        gitHubApi.searchUser(user)
            .then(data => data.message === 'Not Found' ? showErrorScreen() : retrieveUser(data))
            .catch(err => console.error('error -->', err))

        gitHubApi.showRepos(user)
            .then(data => data.message === 'Not Found' ? showErrorScreen() : retrieveRepos(data))
            .catch(err => console.error('error -->', err))
    }
  
})();
