import { Provider } from "../providers/index";

export class PostHandler {
    provider: Provider;

    constructor(provider: Provider) {
        this.provider = provider;
    }

    async getPosts(req, res) {
        try {
            const posts = await this.provider.getPosts();
            res.end(JSON.stringify(posts.data));
        } catch (err) {
            res.end(JSON.stringify(err));
        }
    }
}