// src/app/services/chat-service.service.ts
// src/app/services/chat-service.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000', {
      withCredentials: true,
    });
  }

  sendMessage(message: string): void {
    this.socket.emit('messages', message);
  }

  receiveMessages(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('messages', (message: string) => {
        observer.next(message);
      });
    });
  }

  receiveWindowedMessages(): Observable<string[]> {
    return new Observable<string[]>(observer => {
      this.socket.on('windowedMessages', (messages: string[]) => {
        observer.next(messages);
      });
    });
  }
}
