import { Subject } from "rxjs";

export interface IComponentNotification {
  notify(data: any): void;
  notification(): Subject<any>;
}
