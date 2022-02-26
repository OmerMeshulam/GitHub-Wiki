const searchUser = document.getElementById('searchUser');
const github = new Github();
const ui =new UI();

searchUser.addEventListener('keyup', (e) =>{

const userInput = e.target.value;
if(userInput !== ''){
github.getUser(userInput)
.then(data => {
    console.log(data.profileInfo.messege);
    if(data.profileInfo.messege === 'Not Found'){
        ui.alert('User Not Found... Try a Different One', 'alert alert-danger')
    }
    else{
        ui.showProfile(data.profileInfo)
        ui.showRepos(data.repoInfo)
    }
})
}
else{
    ui.clearProfile();
}

});