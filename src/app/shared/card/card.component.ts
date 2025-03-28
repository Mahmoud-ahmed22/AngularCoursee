import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageSrc: any;
  @Input() cardTitle: any;
  @Input() cardDesc: any;
  @Input() btnDesc: any;
  @Input() id:any;

  @Output() btnEvent = new EventEmitter;

  constructor(private router:Router) {

  }

  fireEvent() {
    this.router.navigate(["recipe", this.id])
  }

}
