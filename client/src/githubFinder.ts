/* eslint-disable @typescript-eslint/no-unused-vars */
export const findGithub = async (name: string) => {
    try {
        let primaryData: any = await fetch(`https://api.github.com/users/${name}`)
        primaryData = await primaryData.json()
        let secondaryData:any = await fetch(`${primaryData.repos_url}`)
        secondaryData = await secondaryData.json();
        let response:github[] = secondaryData.map((repo: any) => {
            return {
                nom: repo.name ,
                stars: repo.stargazers_count ,
                watchers: repo.watchers ,
                forks: repo.forks,
                url: repo.html_url
            }
        })
        if(secondaryData) return {status: true, data: response}
    } catch (error) {
        if(error) return {status: false, data: "no data"}
    }
}