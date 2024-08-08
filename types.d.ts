interface IAlbum {
    userId: number,
    id: number,
    title: string,
    photosIds: number[]
}

interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

interface IPhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string,
    commentsIds: number[]
}

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    },
    albumsIds: number[],
    postsIds: number[],
    todosIds: number[],
}