import { Injectable } from '@angular/core';

// Not needed right now: (https://angular.io/guide/http)
// import { HttpClient } from '@angular/common/http';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface QueryResponse {
    posts
}

@Injectable()
export class DataService {

    constructor(private apollo: Apollo) { }

    getPosts() {
        return this.apollo.watchQuery<QueryResponse>({
            query: gql`
                {
                    posts {
                        id
                        title
                        createdAt
                        author {
                            username
                        }
                    }
                }
            `
        })
    }
}
