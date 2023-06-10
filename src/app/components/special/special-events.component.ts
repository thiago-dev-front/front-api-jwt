import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: any[] = [];

  constructor(
    private _eventService: EventService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._eventService.getSpecialEvents().subscribe(
      (res: any) => {
        this.specialEvents = res;
      },
      (err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
