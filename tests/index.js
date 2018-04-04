describe('API Client based on Fetch API', () => {
    'use strict'

    let target = gitHubApi

   
    describe('search user', () => {
        let user

        beforeEach(done => {
            target.searchUser('asierdev')
                .then(_user => {
                    user = _user

                    done()
                })
                .catch(done)
        })

        it('should get results on search', () => {
            expect(user).not.toBeUndefined()
        })
    })

    describe('show repos', () => {
        let user

        beforeEach(done => {
            target.showRepos('asierdev')
                .then(_user => {
                    user = _user

                    done()
                })
                .catch(done)
        })

        it('should get results on search', () => {
            expect(user).not.toBeUndefined()
            expect(user.length > 0).toBeTruthy()
        })
    })
    
})