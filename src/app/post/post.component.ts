import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router'
import { ApolloQueryObservable } from 'apollo-angular';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    id: number;
    data: ApolloQueryObservable<Post>;

    constructor(
        private ActivatedRoute: ActivatedRoute,
        private router: Router,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.id = +this.ActivatedRoute.snapshot.params['id'];

        if (Number.isInteger(this.id)) {
            this.data = this.dataService.getPost(this.id);
        } else {
            this.gotoPosts();
        }
    }

    gotoPosts() {
        this.router.navigate(['/']);
    }
}

interface Post {
    title: string;
    body: string;
    createdAt: string;
    author: {
        username: string;
    }
}