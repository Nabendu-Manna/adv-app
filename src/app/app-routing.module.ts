import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'all/post', loadChildren: () => import('./all-post/all-post.module').then(m => m.AllPostModule) },
  { path: 'post/:id', loadChildren: () => import('./post/post.module').then(m => m.PostModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
