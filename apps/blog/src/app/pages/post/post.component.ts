import { Component, OnInit } from '@angular/core';
import { PostDetail } from '@nx-cms/model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-cms-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  post$: Observable<PostDetail>;

  ngOnInit(): void {
    const { snapshot } = this.activatedRoute;
    this.post$ = this.http.get<PostDetail>(`/api/post/${snapshot.params.id}`);
  }
}
