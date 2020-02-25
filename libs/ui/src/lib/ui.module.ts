import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { PostListComponent } from './post-list/post-list.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatRippleModule,
    MatButtonModule
  ],
  declarations: [HeaderComponent, PostListComponent, ButtonComponent],
  exports: [HeaderComponent, PostListComponent, ButtonComponent]
})
export class UiModule {}
