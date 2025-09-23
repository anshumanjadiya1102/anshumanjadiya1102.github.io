// Fetch top 5 repos sorted by stars
async function fetchTopRepos(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=5`);
        const data = await res.json();
        if(!Array.isArray(data)) return [];
        return data.map(repo => repo.name);
    } catch(e) {
        console.error("Error fetching repos:", e);
        return [];
    }
}

// Fetch user info (bio, avatar, followers, following)
async function fetchUserInfo(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        return {
            name: data.name || username,
            bio: data.bio || '',
            avatar: data.avatar_url || '',
            followers: data.followers || 0,
            following: data.following || 0
        };
    } catch(e) {
        console.error("Error fetching user info:", e);
        return {
            name: username,
            bio: '',
            avatar: '',
            followers: 0,
            following: 0
        };
    }
}

// Fetch all repos optionally with sorting
async function fetchAllRepos(username, sort = 'stars', per_page = 100) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=${sort}&per_page=${per_page}`);
        const data = await res.json();
        if(!Array.isArray(data)) return [];
        return data.map(repo => ({
            name: repo.name,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url
        }));
    } catch(e) {
        console.error("Error fetching all repos:", e);
        return [];
    }
}
