import { MyBlog } from './MyBlog.model';

export class MyProfileResolved {

    myblogs: MyBlog[];
    error: any = null;

    constructor(myblog, error) { this.myblogs = myblog; this.error = error; }
}


