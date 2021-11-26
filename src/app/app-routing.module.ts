import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
