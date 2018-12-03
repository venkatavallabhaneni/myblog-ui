import { MyBlog } from './MyBlog.model';

export class MyBlogResolved {

   public myblog: MyBlog;
   public error: any = null;

    constructor(myblog, error) { }
}
