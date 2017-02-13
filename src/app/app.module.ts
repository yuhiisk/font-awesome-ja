import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FaListComponent } from './fa-list/fa-list.component';

import { FaHttpService } from './fa-http.service';

@NgModule({
  declarations: [
    AppComponent,
    FaListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    FaHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
