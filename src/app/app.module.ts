import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Services
import { DataService } from './services/data.service';

// Components
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

// Create the client as outlined above
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
