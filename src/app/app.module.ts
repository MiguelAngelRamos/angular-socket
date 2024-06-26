// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatServiceService } from './services/chat-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // Agrega FormsModule a las importaciones
  ],
  providers: [ChatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
