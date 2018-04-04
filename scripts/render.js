
function showErrorScreen() {

    noResults.style.display = 'flex';

}

function retrieveUser(data) {

    noResults.style.display = 'none'
    results.style.display = 'block'

    picture.innerHTML = `<img src=${data.avatar_url} alt='avatar'>`

    infoUser.innerHTML += `<p id='username'>@${data.login}</p>`

    infoUser.innerHTML += `<h1 id='fullname'>${data.name}</h1>`

    infoUser.innerHTML += data.bio ? `<p id='bio'>${data.bio}</p>` : '<p id="bio"> No bio defined </p>'

}

function retrieveRepos(data) {

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