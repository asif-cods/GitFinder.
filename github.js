class GitHub {
    constructor() {
        this.client_id = "Ov23liRAvlEP5uCrxNP2";
        this.client_secret = "3398206cd029e57d7f0c6747988ff2b0d807a134";
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();

        console.log(profile);
        return profile;
    }
}


// const test = new GitHub();

// test.getUser("jaganjavid")


