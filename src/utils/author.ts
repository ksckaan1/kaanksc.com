export type AuthorInfo = {
  username: string
  full_name: string
  avatar_url: string
  title: string
  link: string
}

const authors: AuthorInfo[] = [
  {
    username: 'ksckaan1',
    full_name: 'Kaan Kuscu',
    avatar_url: '/img/avatar.jpg',
    title: 'Backend Developer',
    link: 'https://github.com/ksckaan1'
  }
]

export const getAuthorInfo = (author: string): AuthorInfo | undefined => {
  return authors.find(authorInfo => authorInfo.username === author)
}