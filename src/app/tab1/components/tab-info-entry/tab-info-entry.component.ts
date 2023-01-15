import { Component, OnInit } from '@angular/core';
import { InfoEntryNotificationService } from '../../services/info-entry-notification.service';

@Component({
  selector: 'app-tab-info-entry',
  templateUrl: './tab-info-entry.component.html',
  styleUrls: ['./tab-info-entry.component.scss'],
})
export class TabInfoEntryComponent implements OnInit {

  info = '';

  constructor(private infoEntryNotificationService: InfoEntryNotificationService) { }

  ngOnInit() {}

  onBlur(){
    this.infoEntryNotificationService.notify({
      text: this.info
    });
  }
}
