import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'nx-cms-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() label: string;
  @Output() clickAction: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}
}
