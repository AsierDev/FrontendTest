
const gitHubApi = {

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
