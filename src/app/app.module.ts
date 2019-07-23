import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JbButtonComponent } from 'src/components/jb-button/jb-button.component';

@NgModule({
  declarations: [AppComponent, JbButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
