export type Config = {
    title: string,
    keywords: string,
    description: string,
    url: string,
    og: string
}

export type Category = {
    id: number,
    title: string,
    subTitle: string,
    slug: string,
    initials: string,
    href: string,
    bgColor: string,
    members: number,
}

export type Word = {
    uid: string,
    english: string,
    mongolian: string,
    thumbnail: string,
    images: string[],
    category: string,
}