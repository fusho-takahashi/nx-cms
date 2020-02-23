import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-cms-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
