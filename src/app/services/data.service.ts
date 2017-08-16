import { Injectable } from '@angular/core';

// Not needed right now: (https://angular.io/guide/http)
// import { HttpClient } from '@angular/common/http';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import 'rxjs/add/operator/map'

interface Posts {
    posts
    loading
}

interface Post {
    post
    loading
}


@Injectable()
export class DataService {

    constructor(private apollo: Apollo) { }

    getPosts() {
        return (this.apollo.watchQuery<Posts>({
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
        }) as any).map(({ data }) => data.posts)
    }

    getPost(id: Number) {
        return (this.apollo.watchQuery<Post>({
            query: gql`
               query post($id: Int!) {
                    post(id: $id) {
                        title
                        body
                        createdAt
                        author {
                            username
                        }
                    }
                }
            `,
            variables: {
                id
            }
        }) as any).map(({ data }) => data.post)
    }
}
