import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ChatModule} from './chat/chat.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import {ChatService} from './shared/chat.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    ChatFormComponent,
    FeedComponent,
    MessageComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
