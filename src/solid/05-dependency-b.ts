import { JsonDBService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService extends PostProvider {

    private posts: Post[] = [];

    constructor(private postProvider : PostProvider) {
        super();
    }

    async getPosts() {
        this.posts = await this.postProvider.getPosts()
        return this.posts;
    }
}