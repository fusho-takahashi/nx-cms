import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@nx-cms/ui';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  }
];

@NgModule({
  declarations: [AppComponent, PostsComponent, PostComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
