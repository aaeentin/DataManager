import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

export const MY_QUERY = gql`
    query MyQuery {
      pubtran_last_track_data {
        timestamp
        route_id
        gps_speed
        
      }
 }`;

interface Buses {
  timestamp: string;
  route_id:string;
  gps_speed:number;
}

interface GetBusesResponse {
  buses: Buses[];
}
@Component({
  selector: 'app-apolloTest',
  templateUrl: './apolloTest.component.html',
  styleUrls: ['./apolloTest.component.css']
})
export class ApolloTestComponent implements OnInit {
  buses: Buses[] = [{timestamp:"adf", route_id:"adsf", gps_speed:2}];
  loading = true;
  text = "text"
  data:any;
  constructor(private apollo: Apollo) {}
 
  ngOnInit() {
    this.apollo.watchQuery<any>({
     query: MY_QUERY
   })
    .valueChanges
    .subscribe(({ data, loading }) => {
       this.loading = loading;
       this.buses = data.buses;
       this.data = data.pubtran_last_track_data;
       console.log("begin data");
       //console.log(data);
       console.log(this.data);
      console.log("end data")
   });
  }
}
