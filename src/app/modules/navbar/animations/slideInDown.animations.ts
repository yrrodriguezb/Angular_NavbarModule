import { trigger, transition, animate, style, state } from '@angular/animations';

export const slideInDown = trigger('slideInDown', [
  state('open', style({
    visibility: 'visible',
    opacity: 1,
    height: 'auto'
  })),

  state('close', style({
    visibility: 'hidden',
    opacity: 0,
    height: '1px'
  })),

  transition('open => close',[
    animate('.5s ease-in-out')
  ]),

  transition('close => open',[
    animate('275ms ease-out')
  ]),

]);
