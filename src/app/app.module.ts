import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloTestComponent } from './apolloTest/apolloTest.component';
import { FirstComponentComponent } from './firstComponent/firstComponent.component';
//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [		
    AppComponent,
    ApolloTestComponent,
    FirstComponentComponent
   ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'apollo', component: ApolloTestComponent },
      { path: 'first', component: FirstComponentComponent }
    ],
    { enableTracing: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
