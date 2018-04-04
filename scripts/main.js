(function () {

    const picture = document.getElementById('picture')
    const infoUser = document.getElementById('info-user')
    const reposList = document.getElementById('repos-list')
    const results = document.getElementById('results')
    const noResults = document.getElementById('no-results')
    const reposView = document.getElementById('repos-view')

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

    function showErrorScreen() {
        
        noResults.style.display = 'flex';

    }

    function retrieveUser(data) {
        console.log(data)

        noResults.style.display = 'none'
        results.style.display = 'block'

        picture.innerHTML = `<img src=${data.avatar_url} alt='avatar'>` 

        infoUser.innerHTML += `<p id='username'>@${data.login}</p>` 

        infoUser.innerHTML += `<h1 id='fullname'>${data.name}</h1>` 

        infoUser.innerHTML += data.bio ? `<p id='bio'>${data.bio}</p>` : '<p id="bio"> No bio defined </p>'
        
    }

    function retrieveRepos(data) {
        console.log(data)
        
        reposView.style.display = 'block'

        data.map(repo => {

            return reposList.innerHTML += 
            `<li class='repos'>
                <h2>
                    <a href=${repo.html_url} target='_blank' rel='noopener noreferrer'>${repo.name}</a>
                </h2>
                 <div id='icons'>
                    <img src='./images/stars.svg'>${repo.stargazers_count}
                    <img src='./images/forks.svg'>${repo.forks_count}
                </div>
            </li>
            <hr>`
        })

    }

})();
