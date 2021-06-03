import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table'  

@Component({
  selector: 'app-materialsTable',
  templateUrl: './materialsTable.component.html',
  styleUrls: ['./materialsTable.component.css']
})
export class MaterialsTableComponent implements OnInit {
  //input - data for table (array of jsons)
  @Input() data!: any;
  @Input() columns!: any;
  //output - changes, selects
  
  constructor() { }
  ngOnInit() {
    console.log("init table")
  }

  clickedRows = new Set<any>();
  
}
