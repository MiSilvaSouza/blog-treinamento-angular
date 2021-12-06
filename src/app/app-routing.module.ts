import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './core/layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/posts', pathMatch: 'full' },
      { path: 'not-found', component: PageNotFoundComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'busca/:keyword', component: PostListComponent },
      {
        path: 'post/:id',
        component: PostViewComponent,
        children: [
          {
            path: 'comentarios',
            loadChildren: () =>
              import('./post-view/comments/comments.module').then(
                (m) => m.CommentsModule
              ),
          },
        ],
      },
      { path: 'sobre-mim', component: AboutComponent },
      { path: 'contato', component: ContactComponent },
      { path: 'portifolio', component: PortfolioComponent },
      //{ path: '**', redirectTo: '/not-found', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      )
    // component: AdminComponent,
    // children: [
    //   {
    //     path: 'comentarios',
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
