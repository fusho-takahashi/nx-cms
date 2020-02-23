import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatRippleModule
  ],
  declarations: [HeaderComponent, PostListComponent],
  exports: [HeaderComponent, PostListComponent]
})
export class UiModule {}
