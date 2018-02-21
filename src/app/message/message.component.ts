import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from '../shared/chat.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

 messages: Observable<Message[]>;
  constructor(public chat: ChatService) { }

/*constructor() {}*/
  ngOnInit() {
  this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val) );
  }

}
