import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@nx-cms/ui';
import { PostedListComponent } from './pages/posted-list/posted-list.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PostedListComponent
  },
  {
    path: 'post-edit/:id',
    component: PostEditComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostedListComponent,
    PostEditComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
