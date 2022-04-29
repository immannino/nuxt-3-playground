import { Provider } from './Provider';
import { Post } from '../../../interfaces/plan';
import Sqlite3, { Database } from 'better-sqlite3';

export class DBProvider extends Provider {
    sql: Database
    constructor(connection: string) {
        super();
        this.sql = new Sqlite3(connection, {})
    }

    async getPosts(): Promise<Post[]>  {
        return [];
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