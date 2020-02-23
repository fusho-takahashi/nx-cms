import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatToolbarModule],
  declarations: [HeaderComponent, PostListComponent],
  exports: [HeaderComponent]
})
export class UiModule {}
