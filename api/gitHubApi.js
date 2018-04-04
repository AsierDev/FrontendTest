
const gitHubApi = {

   /*  baseUrl() {
        return 'https://api.github.com/users/'
    },

    searchUser: function (user) {
        return fetch(`${this.baseUrl()}${user}`)
    },
  
    showRepos: function (user, path) {
        return fetch(`${this.baseUrl()}${user}/${path}`)
    },
     */

    baseUrl: 'https://api.github.com/users/',

    call: function (_PATH) {
        return new Promise((resolve, reject) => {

            fetch(_PATH)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))            
        })
            .catch(err => {
                throw new Error(err)
            })
    },

    searchUser: function (user) {
        const path = `${this.baseUrl}${user}`

        return this.call(path)
    },

    showRepos: function (user) {
        const path = `${this.baseUrl}${user}/repos`

        return this.call(path)
    },



    
}
