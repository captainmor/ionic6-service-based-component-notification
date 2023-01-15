import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IComponentNotification } from './icomponent-notification.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoEntryNotificationService implements IComponentNotification {

  constructor() { }

  private subject = new Subject<any>();

  notify(data: any): void {
    this.subject.next(data);
  }
  notification(): Subject<any> {
    return this.subject
  }
}
