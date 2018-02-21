import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from '../shared/chat.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  formValue: string;

  constructor(public chat: ChatService) { }

  ngOnInit() {
    console.log('from FORM' + this.formValue);
  }
  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';

  }

}
