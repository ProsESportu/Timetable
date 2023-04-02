import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent {
  @Input() input: fullLesson[] = [{
    lesson: "lesson",
    teacher: { id: "n99.html", short: "mz" },
    room: { id: "s99.html", short: "sj4" }
  }]
  @Input() teacher: teacher[]|null = []

  processedData() {
    return this.input.map((e, i) => {
      try{
      e.teacher.long = this.teacher?.filter(f => f.id === e.teacher.id)[0].name
      }
      catch{}
      return e;
    })
  }
}
interface fullLesson {
  lesson: string;
  teacher: {
    id: string;
    short: string;
    long?: string
  };
  room: {
    id: string;
    short: string;
  };
}
interface teacher {
  id: string;
  name: string;
  short: string;
}