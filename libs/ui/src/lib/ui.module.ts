import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatToolbarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class UiModule {}
