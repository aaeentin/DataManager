import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloTestComponent } from './apolloTest/apolloTest.component';
import { FirstComponentComponent } from './firstComponent/firstComponent.component';
//import { AppRoutingModule } from './app-routing.module';
import { MaterialsTableComponent } from './materialsTable/materialsTable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  
@NgModule({
  declarations: [			
    AppComponent,
    ApolloTestComponent,
    FirstComponentComponent,
      MaterialsTableComponent
   ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'apollo', component: ApolloTestComponent },
      { path: 'first', component: FirstComponentComponent },
      { path: 'table', component: MaterialsTableComponent }
    ],
    { enableTracing: true }),
    BrowserAnimationsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
