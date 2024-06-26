// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from './services/chat-service.service';
//* Single Page Aplication
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: string[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatServiceService) {}

  ngOnInit(): void {
    this.chatService.receiveMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.chatService.receiveWindowedMessages().subscribe(windowedMessages => {
      this.messages = this.messages.concat(windowedMessages);
    });
  }

  sendMessage(): void {
    //*          hola
    if (this.newMessage.trim().length > 0) {
      this.chatService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
