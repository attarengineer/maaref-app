import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Blog } from '../blog.model';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {

  lodedBlog: Blog;

  constructor(
    private activateRoute: ActivatedRoute,
    private blogsService: BlogsService,
    private router: Router,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      if (!params.has('blogId')) {
        this.router.navigate(['/blog'])
        return;
      }

      const blogId = parseInt(params.get('blogId'));
      this.lodedBlog = this.blogsService.getBlogById(blogId);
    })
  }

  removeBlog() {
    this.alertCtrl.create({
      header: 'حذف ' + this.lodedBlog.title,
      message: 'آیا می خواهید ' + this.lodedBlog.title + 'را پاک کنید؟',
      buttons: [
        {
          text: 'لغو',
          role: 'cancel',
        },
        {
          text: 'حذف',
          handler: () => {
            this.blogsService.removeBlogFromBlogs(this.lodedBlog.id);
            this.router.navigate(['/blog']);
          }
        },
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}
