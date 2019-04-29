import { trigger, transition, animate, style, state } from '@angular/animations';

export const indicatorRotate = trigger('indicatorRotate', [
  state('collapsed', style({transform: 'rotate(0deg)'})),
  state('expanded', style({transform: 'rotate(180deg)'})),
  transition('expanded <=> collapsed',
    animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
  ),
]);