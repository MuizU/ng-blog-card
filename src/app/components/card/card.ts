import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css',
  imports: [NgIconComponent],
})
export class Card {}
