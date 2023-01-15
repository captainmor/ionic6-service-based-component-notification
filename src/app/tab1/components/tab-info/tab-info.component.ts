import { Component, OnInit } from '@angular/core';
import { InfoEntryNotificationService } from '../../services/info-entry-notification.service';

@Component({
  selector: 'app-tab-info',
  templateUrl: './tab-info.component.html',
  styleUrls: ['./tab-info.component.scss'],
})
export class TabInfoComponent implements OnInit {

  text = '...';
  constructor(private infoEntryNotificationService: InfoEntryNotificationService) { }

  ngOnInit() {
    this.infoEntryNotificationService.notification().subscribe((data) => {
      this.text = data.text;
    })
  }

}
