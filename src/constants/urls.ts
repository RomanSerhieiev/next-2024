const baseURL = 'https://jsonplaceholder.typicode.com'

const endpoint = {
    posts: `/posts`,
    comments: `/comments`,
    albums: `/albums`,
    photos: `/photos`,
    todos: `/todos`,
    users: `/users`,
}

const url = {
    posts: {
        all: `${baseURL}${endpoint.posts}`,
        byId: (id: string): string => `${baseURL}${endpoint.posts}/${id}`,
        byUser: (userId: string): string => `${baseURL}${endpoint.users}/${userId}${endpoint.posts}`,
    },
    comments: {
        all: `${baseURL}${endpoint.comments}`,
        byId: (id: string): string => `${baseURL}${endpoint.comments}/${id}`,
        byPost: (postId: string): string => `${baseURL}${endpoint.posts}/${postId}${endpoint.comments}`,
    },
    albums: {
        all: `${baseURL}${endpoint.albums}`,
        byId: (id: string): string => `${baseURL}${endpoint.albums}/${id}`,
        byUser: (userId: string): string => `${baseURL}${endpoint.users}/${userId}${endpoint.albums}`
    },
    photos: {
        all: `${baseURL}${endpoint.photos}`,
        byId: (id: string): string => `${baseURL}${endpoint.photos}/${id}`,
        byAlbum: (albumId: string): string => `${baseURL}${endpoint.albums}/${albumId}${endpoint.photos}`
    },
    todos: {
        all: `${baseURL}${endpoint.todos}`,
        byId: (id: string): string => `${baseURL}${endpoint.todos}/${id}`,
        byUser: (userId: string): string => `${baseURL}${endpoint.users}/${userId}${endpoint.todos}`
    },
    users: {
        all: `${baseURL}${endpoint.users}`,
        byId: (id: string): string => `${baseURL}${endpoint.users}/${id}`
    }
}

export {
    baseURL,
    url
}