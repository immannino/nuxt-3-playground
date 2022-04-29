export abstract class Provider {
    abstract getPosts();
    abstract getPost(id);
    abstract createPost(data);
    abstract updatePost(id, data);
    abstract deletePost(id);
}