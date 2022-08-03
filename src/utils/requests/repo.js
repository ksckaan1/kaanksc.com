export const repoRequest = async ()=>{
    let response;
    let url = "https://api.github.com/users/ksckaan1/repos"
    await fetch(url).then(data => {
        if (data.status === 200){
            return data.json()
        }
    }).then(data => {

        let filtered = data.filter(repo => !repo.fork)

        response = filtered.sort(sortRepos)
    })
    return response;
}

function sortRepos (a,b){
    if (a.stargazers_count > b.stargazers_count) return -1
    if (a.stargazers_count < b.stargazers_count) return 1
    return 0;
}