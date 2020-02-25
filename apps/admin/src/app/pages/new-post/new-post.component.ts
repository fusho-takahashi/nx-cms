import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostDetail } from '@nx-cms/model';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'nx-cms-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  public postForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    tags: [''],
    article: ['', Validators.required]
  });

  ngOnInit(): void {}

  onSubmit() {
    this.http
      .post<PostDetail>('/api/new-post', {
        id: 3,
        title: this.postForm.value.title,
        published: new Date(),
        tags: [this.postForm.value.tags],
        article: [this.postForm.value.article]
      })
      .pipe(take(1))
      .subscribe();

    this.router.navigate(['/']);
  }
}
