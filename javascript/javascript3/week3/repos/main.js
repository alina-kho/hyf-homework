//Fetch repos
function fetchRepo(userName) {
  return fetch(`https://api.github.com/search/repositories?q=user:${userName}`);
}

//Fetching all at once
function fetchAndRenderRepos() {
  try {
    Promise.all([
      fetchRepo("alina-kho"),
      fetchRepo("rebeccahockley"),
      fetchRepo("rismita87"),
    ])
      .then((results) => {
        return Promise.all(results.map((result) => result.json()));
      })
      .then((repos) => {
        let userData = repos.map((repo) => repo.items);
        console.log(userData);
        const userList = document.createElement("ul");
        userData.forEach((user) => {
          const userDiv = document.createElement("li");
          userDiv.className = "user";
          const userName = user[0].owner.login;
          userDiv.innerHTML = `${userName}'s repostories:`;
          user.forEach((rep) => {
            const repo = document.createElement("li");
            repo.className = "repo";
            repo.innerHTML = `${rep.name}: ${rep.svn_url}`;
            userDiv.appendChild(repo);
          });
          userList.appendChild(userDiv);
        });
        document.body.appendChild(userList);
      });
  } catch (error) {
    console.log.bind(console);
  }
}

fetchAndRenderRepos();
