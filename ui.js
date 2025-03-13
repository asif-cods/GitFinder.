
class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    // Display the user profile

    showProfile(user) {

        if (user.message === "Not Found") {
            this.profile.innerHTML = "<h1>User not found</h1>"
        } else {
            this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="gap-3 col-md-3">
                    <img width="100%" src=${user.avatar_url} alt="">
                    <a href=${user.html_url} class="mt-3 btn btn-dark">View Profile</a>
                    </div>
                    <div class=" col-md-9">
                        <ul class"gap-4">
                        <li><span class="p-3 badge bg-secondary">
                            Public Repos : ${user.public_repos}
                        </span></li>
                        <li><span class="p-3 badge bg-secondary">
                        Followers : ${user.followers}
                        </span></li>
                        <li><span class="p-3 badge bg-secondary">
                            Following : ${user.following}
                        </span></li>
                        </ul>
              </div>
                </div>
                </div>
            `
        }


    }

    showAlert(message, className){
        let displayAlert = document.querySelector(".show-alert");
        displayAlert.innerHTML = `
            <div class="alert ${className}" role="alert">
            ${message}
            </div>
        `;
        setTimeout(()=> {
            displayAlert.innerHTML = "";
        }, 4000);
    
    }

    clearProfile(){
        this.profile.innerHTML = "";
    }
}