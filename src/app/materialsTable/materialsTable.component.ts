import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table'  

@Component({
  selector: 'app-materialsTable',
  templateUrl: './materialsTable.component.html',
  styleUrls: ['./materialsTable.component.css']
})
export class MaterialsTableComponent implements OnInit {
  //input - data for table (array of jsons)
  @Input() data: any | undefined;
  @Input() columns: any | undefined;
  //output - changes, selects
  
  constructor() { }
  ngOnInit() {
  }

  clickedRows = new Set<any>();
  
}
