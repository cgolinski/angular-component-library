import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jb-button',
  templateUrl: './jb-button.component.html',
  styleUrls: ['./jb-button.component.css'],
  host: {
    role: 'button',
    class:
      'mv2 pointer avenir b b--none bg-dark-blue white no-underline dib ph4 pv3 w-100 w-max-ns w-auto-ns tc ml4',
    '[class.f4]': 'size === "large"',
    '[class.f6]': 'size === "medium"',
    '[class.f7]': 'size === "small"',
    style: 'border-radius: 0 10px',
  },
})
export class JbButtonComponent implements OnInit {
  constructor() {}
  @Input() text: string;
  @Input() size: 'small' | 'medium' | 'large';

  ngOnInit() {}
}
