
const github = new GitHub();

const ui = new UI();

document.querySelector(".profile").style.display = "none";


const submitBtn = document.querySelector("#submit-button");

submitBtn.addEventListener("click", (e) => {

    // Get the user input
    let userText = document.querySelector("#searchUser").value;

    if(userText === ""){
        ui.showAlert("Please fill the fileds","alert-info");
    }else{
        github.getUser(userText)
        .then(data => ui.showProfile(data))
        .catch(err => console.log(err))
    }
    document.querySelector(".profile").style.display = "block";

    document.querySelector("#searchUser").value = "";

})

document.querySelector("#searchUser").addEventListener("input", (e) => {
    ui.clearProfile();
})