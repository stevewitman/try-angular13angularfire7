import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add', component: AddPostPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
