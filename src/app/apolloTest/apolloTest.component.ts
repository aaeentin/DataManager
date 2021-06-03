import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { DocumentNode } from 'graphql/language/ast';

@Component({
  selector: 'app-apolloTest',
  templateUrl: './apolloTest.component.html',
  styleUrls: ['./apolloTest.component.css']
})
export class ApolloTestComponent implements OnInit {
  constructor(private apollo: Apollo) {}
  //input - grapQL string
  @Input() graphQ!: DocumentNode;
  //output - data for table
  @Output() data = new EventEmitter();
  @Output() columns = new EventEmitter();

  private querySubscription!: Subscription;
  query!: QueryRef<any>;
  loading!: boolean;

  ngOnInit() {
    console.log("init apollo")
    this.query = this.apollo.watchQuery<any>({
      query: this.graphQ
    });
    this.querySubscription = this.query
      .valueChanges
      .subscribe(({ data, loading }) => {
      //TODO - if resposne is empty
      this.data.emit(data.pubtran_last_track_data);
      this.columns.emit(Object.keys(data.pubtran_last_track_data[0]));
     });
    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.query = this.apollo.watchQuery<any>({
      query: this.graphQ
    });
    this.querySubscription = this.query
      .valueChanges
      .subscribe(({ data, loading }) => {
      //TODO - if resposne is empty
      this.data.emit(data.pubtran_last_track_data);
      this.columns.emit(Object.keys(data.pubtran_last_track_data[0]));
     });
  }

  refresh() {
    this.query.refetch()
  }
}
