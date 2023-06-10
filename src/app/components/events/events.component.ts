import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';

interface Event {
  name: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      );
  }
}
