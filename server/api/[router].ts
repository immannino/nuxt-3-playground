import { createRouter, useBase } from 'h3';
import { DBProvider, HTTPProvider } from './providers/index';
import { PostHandler } from './handlers';

const db = new DBProvider(null);
const api = new HTTPProvider(null);

const post = new PostHandler(api);

let router = createRouter();

router.get('/posts', post.getPosts.bind(post));

export default useBase('/api/', router.handler);