import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostMetaData } from '@nx-cms/model';

@Component({
  selector: 'nx-cms-posted-list',
  templateUrl: './posted-list.component.html',
  styleUrls: ['./posted-list.component.scss']
})
export class PostedListComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  public readonly posts$ = this.http.get<PostMetaData[]>('/api/posts');

  ngOnInit(): void {}

  goToPostEdit(id: number) {
    this.router.navigate(['post-edit', id]);
  }
}
