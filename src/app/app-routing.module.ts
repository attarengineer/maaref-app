import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BlogDetailPage } from './blog/blog-detail/blog-detail.page';
import { BlogPage } from './blog/blog.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogPageModule)
      },
      {
        path: ':blogId',
        loadChildren: () => import('./blog/blog-detail/blog-detail.module').then(m => m.BlogDetailPageModule)
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./blog/discover/discover.module').then(m => m.DiscoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
