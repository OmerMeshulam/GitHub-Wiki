class Github{
    constructor() {
    this.client_id = '67f8ef5d301f9d5eb8ea';
    this.client_secret = 'ba86359c9f712cd4493ada155c0338aff001d743';
    this.repos_count = 4;
    this.repos_sort = 'created: asc';
    }

    async getUser(user){
    const headers = {
        "Authorization" : "Token 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"
    }
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, {
            "method": "GET",
            "headers": headers
        });


        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, {
            "method": "GET",
            "headers": headers
        });

        const profileInfo = await profileResponse.json();
        const repoInfo = await repoResponse.json();

        return {
            profileInfo,
            repoInfo
        }

    }




}