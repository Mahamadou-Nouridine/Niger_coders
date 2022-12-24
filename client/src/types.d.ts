interface github {
    nom: string,
    stars: number | string,
    watchers: number | string,
    forks: number | string,
    url: string
}

interface infor {
    location?: string;
    company?: string;
    bio?: string;
    github?: string;
  }

interface post {
    devName: string,
    devPhoto?: string,
    devId: string
    text: string,
    date: string,
    comments?: comment[],
    _id: string
}

interface author {
    authId: string,
    photo?: string|null,
    name: string,
    _id: string
}

interface comment {
    author: author,
    text: string,
    _id: string
}

interface education {
    school: string,
    diploma: string,
    from: string,
    to: string,
    location: string,
    _id: string
}

interface experience {
    company: string,
    job: string,
    from: string,
    to: string,
    location: string,
    _id: string
}

// interface post {
//     devId: string
//     text: string,
//     date: string,
//     comments?: comment[],
//     _id: string
// }

interface socialMedia {
    name: string,
    link: string,
    _id: string
}

interface skill {
    name: string,
    percentage: number,
    _id: string
}

interface dev {
    name: string,
    location?: string,
    photo?: string,
    company?: string,
    skills: skill[],
    github?: string,
    bio?: string
    email: string,
    socialMedias?: socialMedia[],
    posts?: post[],
    experiences?: experience[],
    educations?: education[],
    _id: string
}