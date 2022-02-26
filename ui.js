class UI{
    constructor(){
        this.profile = document.getElementById('profile-section');
    }

    
    showProfile(user){
    
        this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge btn-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge btn-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge btn-success">Followers: ${user.followers}</span>
            <span class="badge btn-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item mb-1 font-weight-bold">Company: ${user.company}</li>
              <li class="list-group-item font-weight-bold">Website/Blog: ${user.blog}</li>
              <li class="list-group-item font-weight-bold">Location: ${user.location}</li>
              <li class="list-group-item font-weight-bold">Member Since: ${(user.created_at)}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repositories:</h3>
      <div id="repos"></div>
    `;
    }
   //.substring(0, 10) Member Since

    showRepos(userRepos){
    const repoSection = document.getElementById('repos');
    let output =  '';
    userRepos.forEach(repo => {
    
    output += `
        <div class="card card-body mb2">
            <div class="row">
                <div class="col-md-6"> 
                <a class="mb1 nav-link btn-light" href="${repo.html_url}" target="_blank">${repo.name}</a>
                <div class="description">
                
                </div>
                </div>
                <div class"col-md-9 repo-features">
                <span class="badge badge-success">Amount of Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary">Forks: ${repo.forks_count}</span>
                <span class="badge badge-warning">Language: ${repo.language}</span>
                <span class="badge badge-danger">Watchers: ${repo.watchers_count}</span>
                </div>
            </div>
        </div>
    `;
    })
repoSection.innerHTML = output;
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
    alert(messege, className){
        this.clearAlert();
        const alertDiv = document.createElement('div');
        alertDiv.className = className;
        alertDiv.appendChild(document.createTextNode(messege));
        const container =  document.querySelector('.searchContainer');
      const search = document.querySelector('.search');
      container.insertBefore(alertDiv, search);;

        setTimeout(() => this.clearAlert(), 2600)
    }
    clearAlert(){
        const alert = document.querySelector('.alert');
        if(alert)
        alert.remove();
    }

}