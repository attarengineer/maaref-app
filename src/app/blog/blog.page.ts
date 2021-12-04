import { Component, OnInit } from '@angular/core';
import { Blog } from './blog.model';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  
  blogs: Blog[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogs = this.blogsService.getAllBlogs();
  }

  ionViewWillEnter() {
    this.blogs = this.blogsService.getAllBlogs();
  }

}
