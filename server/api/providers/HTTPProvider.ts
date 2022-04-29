import { Provider } from './Provider';
import { Post } from '../../../interfaces/plan';
import Axios from 'axios';

export class HTTPProvider extends Provider {

    constructor(uri: string) {
        super();
    }

    async getPosts(): Promise<Post[]>  {
        return Axios.get('https://jsonplaceholder.typicode.com/todos/1');
    };

    async getPost(id): Promise<Post>  {
        return null;
    };

    async createPost(data): Promise<Post>  {
        return null;
    };

    async updatePost(id, data): Promise<Post> {
        return null;
    };

    async deletePost(id): Promise<void> {

    };
}   