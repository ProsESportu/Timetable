import { Component } from '@angular/core';

import { FirebaseServiceService } from "../firebase-service.service";
import { map } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(public firebaseData: FirebaseServiceService) { }
  timeTable$ = this.firebaseData.timeTable$
  teacher$ = this.firebaseData.teachers$
  header = ["Time", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday"]
  hours$ = this.timeTable$.pipe(map(e => {
    return e[0].map(f => f.time)
  }))
}
