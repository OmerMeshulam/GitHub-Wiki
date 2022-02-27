const searchUser = document.getElementById('searchUser');
const github = new Github();
const ui =new UI();

searchUser.addEventListener('keyup', (e) =>{

const userInput = e.target.value;
if(userInput !== ''){
github.getUser(userInput)
.then(data => {
    if(data.profileInfo.message !== 'Not Found'){
        ui.showProfile(data.profileInfo)
        ui.showRepos(data.repoInfo)
    }
    else{    
    ui.alert("User Doesn't Exist... ", 'alert alert-danger')}
})
}
else{
    ui.clearProfile();
}

});