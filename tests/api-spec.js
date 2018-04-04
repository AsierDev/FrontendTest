describe("search users", function () {
    let users;

    beforeEach(function (done) {
        gitHubApi.searchUser(
            "asierdev",
            function (_user) {
                user = _user;

                done();
            },
            function (error) {
                done();
            }
        );
    });

    it("should get results on search", function () {
        expect(users).not.toBeUndefined();
    });
});
