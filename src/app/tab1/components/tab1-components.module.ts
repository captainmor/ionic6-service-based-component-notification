import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TabInfoComponent } from './tab-info/tab-info.component';
import { TabInfoEntryComponent } from './tab-info-entry/tab-info-entry.component';



@NgModule({
  declarations: [TabInfoComponent, TabInfoEntryComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [TabInfoComponent, TabInfoEntryComponent]
})
export class Tab1ComponentsModule { }
