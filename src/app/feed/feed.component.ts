import {Component, OnInit} from '@angular/core';
import {ChatService, Message} from '../shared/chat.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/scan';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }



}
