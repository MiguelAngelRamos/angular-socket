import { Component } from '@angular/core';
import { ChatServiceService } from './services/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  messages: string[] = [];
  newMessage: string = '';

  constructor(private chatService:ChatServiceService) {}

  ngOnInit():void {
    this.chatService.receiveMessages().subscribe(message => {
      this.messages.push(message);
      console.log(this.messages);
    })
  }
  //* holamundo
  sendMessage():void {
    if(this.newMessage.trim().length > 0 ) {
      this.chatService.sendMessage(this.newMessage);
      this.newMessage= '';
    }
  }
}
