import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  private firestore = inject(Firestore)
  timeTable$
  substitutions$
  teachers$
  constructor() {
    const timeTableDataCollection = collection(this.firestore, "TimeTableData")
    const subtitutionsCollection = collection(this.firestore, "substitutions")
    const teacherCollection = collection(this.firestore, "teachers")
    this.timeTable$ =
      collectionData(timeTableDataCollection)
        .pipe(map(e => JSON.parse(e[0]["timeTable"]))) as Observable<TimeTableData[][]>
    this.substitutions$ =
      collectionData(subtitutionsCollection)
        .pipe(map(e => e[0]["result"])) as Observable<subtitution[]>
    this.teachers$ =
      collectionData(teacherCollection)
        .pipe(map(e => e[0]["result"])) as Observable<teacher[]>
  }
}
export interface TimeTableData {
  time: string;
  lessons: Lesson[];
}

export interface Lesson {
  lesson: string;
  teacher: Room;
  room: Room;
}

export interface Room {
  id: string;
  short: string;
}
interface subtitution {
  nr: string;
  teacher: string;
  class: string;
  subject: string;
  room: string;
  subctitute: string;
  reason: string;
  notes: string;
}
interface teacher {
  id: string;
  name: string;
  short: string;
}