import { Component, Input } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-substitutions-list',
  templateUrl: './substitutions-list.component.html',
  styleUrls: ['./substitutions-list.component.css']
})
export class SubstitutionsListComponent {
  constructor(public firebaseData: FirebaseServiceService) { }
  substitutions$ = this.firebaseData.substitutions$
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
