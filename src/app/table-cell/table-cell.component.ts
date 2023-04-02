import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent {
  @Input() input:fullLesson[]=[{
    lesson:"lesson",
    teacher:{id:"n99.html",short:"mz"},
    room:{id:"s99.html",short:"sj4"}
  }]

}
interface fullLesson {
  lesson: string;
  teacher: {
      id: string;
      short: string;
  };
  room: {
      id: string;
      short: string;
  };
}