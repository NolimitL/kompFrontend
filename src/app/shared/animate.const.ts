import { animate, style, transition, trigger } from '@angular/animations';

export const slide = [
  trigger( 'slide', [
    transition(':enter', [
      style({
        transformOrigin:'top',
        transform:'rotateX(-90deg)'
      }),
      animate(400, style({
        transformOrigin:'top',
        transform:'rotateX(0deg)'
      }))
    ]),
    transition(':leave', [
      style({
        transformOrigin:'top',
        transform:'rotateX(0deg)'
      }),
      animate(400, style({
        transformOrigin:'top',
        transform:'rotateX(-90deg)'
      }))
    ])
  ]),
  trigger( 'slideUp', [
    transition(':enter', [
      style({
        transformOrigin:'bottom',
        transform:'rotateX(90deg)'
      }),
      animate(400, style({
        transformOrigin:'bottom',
        transform:'rotateX(0deg)'
      }))
    ]),
    transition(':leave', [
      style({
        transformOrigin:'bottom',
        transform:'rotateX(0deg)'
      }),
      animate(400, style({
        transformOrigin:'bottom',
        transform:'rotateX(-90deg)'
      }))
    ])
  ])
]
