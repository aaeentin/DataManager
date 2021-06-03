import { Component, OnInit } from '@angular/core';
import {  gql } from 'apollo-angular';
@Component({
  selector: 'app-firstComponent',
  templateUrl: './firstComponent.component.html',
  styleUrls: ['./firstComponent.component.css']
})
export class FirstComponentComponent implements OnInit {
  data = [];
  columns = [];
  constructor() { }
  query_tmp = `
    query MyQuery {
      pubtran_last_track_data {
        timestamp
        route_id
        gps_speed
      }
    }`;

  query = gql`
    query MyQuery {
      pubtran_last_track_data {
        timestamp
        route_id
        gps_speed
      }
    }`;

  ngOnInit() {
    console.log("init first")
  }

  getData(data: any)
  {
    //console.log("data")
    this.data = data;
  }
  getColumns(columns: any)
  {
    this.columns = columns;
  }
}