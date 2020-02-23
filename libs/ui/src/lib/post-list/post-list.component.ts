import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { PostMetaData } from '@nx-cms/model';

@Component({
  selector: 'nx-cms-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  constructor() {}

  @Input() posts: PostMetaData[];

  @Output() selectList: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}
}
