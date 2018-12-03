import { MyBlog } from './MyBlog.model';

export class MyBlogResolved {

    myblog: MyBlog;
    error: any = null;

    constructor(myblog, error) { this.myblog = myblog; this.error = error; }
}


