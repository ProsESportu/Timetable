import { Component, Input } from '@angular/core';
import { FirebaseServiceService, SubstitutionClass } from '../firebase-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-substitutions-list',
  templateUrl: './substitutions-list.component.html',
  styleUrls: ['./substitutions-list.component.css']
})
export class SubstitutionsListComponent {
  constructor(public firebaseData: FirebaseServiceService) { }
  substitutions$ = this.firebaseData.substitutions$.pipe(map(e=>{
    return e.filter(f=>f!=="err") as SubstitutionClass[]
  }))
  displayedColumns = [
    "nr",
    "teacher",
    "class",
    "subject",
    "room",
    "subctitute",
    "reason",
    "notes",
  ]
}
