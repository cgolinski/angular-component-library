import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jb-card',
  templateUrl: './jb-card.component.html',
  styleUrls: ['./jb-card.component.css'],
  host: {
    class: 'ba b--black db w5 flex flex-column',
  },
})
export class JbCardComponent implements OnInit {
  constructor() {}
  @Input() cardTitle: string;
  @Input() text: string;
  @Input() image: string;

  ngOnInit() {}
}
