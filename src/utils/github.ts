import type {IRepo} from "$lib/models/github";

export const getRepositories = async (): Promise<IRepo[]> => {
    let repos: IRepo[] = [];
    let url = "https://api.github.com/users/ksckaan1/repos?per_page=100"
    const response = await fetch(url);
    let json: IRepo[] = await response.json();

    // Only un-forked
    let filtered = json.filter(repo => !repo.fork)

    // sort by stargazers desc
    filtered = filtered.sort(sortRepos)

    return Promise.resolve(filtered);
}

function sortRepos(a: IRepo, b: IRepo) {
    if (a.stargazers_count > b.stargazers_count) return -1
    if (a.stargazers_count < b.stargazers_count) return 1
    return 0;
}