import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class UiModule {}
