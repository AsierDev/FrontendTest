
const gitHubApi = {

    baseUrl() {
        return 'https://api.github.com/users/'
    },

    searchUser: function (user) {
        return fetch(`${this.baseUrl()}${user}`)
    },
  
    showRepos: function (user, path) {
        return fetch(`${this.baseUrl()}${user}/${path}`)
    },
    

    
}
