import { Injectable } from '@angular/core';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogs: Blog[] = [
    new Blog(
      1,
      'عنوان اول اخبار 1',
      'sdfgasfsafsd',
      '../../assets/images/1.jpg',
      ['خبر اول', 'اولین']
    ),
    new Blog(
      2,
      'عنوان اول اخبار 2',
      'xcvxcvbhgcvhngh',
      '../../assets/images/2.jpeg',
      ['خبر دوم', 'دومین']
    ),
  ]
  constructor() { }

  getAllBlogs() {
    return [...this.blogs];
  }

  getBlogById(blogId: number) {
    return {
      ...this.blogs.find(blog => {
        return blog.id === blogId;
      })
    };
  }

  removeBlogFromBlogs(blogId: number) {
    this.blogs = this.blogs.filter(blog => {
      return blog.id !== blogId
    });
  }
}
