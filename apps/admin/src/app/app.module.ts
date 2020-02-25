import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@nx-cms/ui';
import { PostedListComponent } from './pages/posted-list/posted-list.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PostedListComponent
  },
  {
    path: 'post-edit/:id',
    component: PostEditComponent
  }
];

@NgModule({
  declarations: [AppComponent, PostedListComponent, PostEditComponent],
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
