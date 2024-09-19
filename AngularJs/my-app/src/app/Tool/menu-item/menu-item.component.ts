import { Component, Input, input, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '../../home/home.component';
import { Router, RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [MatIconModule,RouterLink,MatListModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  animations: [
    trigger('collapseAnimation', [
      state('expanded', style({
        height: '*',
        // opacity: 1,
        overflow: 'hidden'
      })),
      state('collapsed', style({
        height: '0px',
        // opacity: 0,
        overflow: 'hidden'
      })),
      transition('expanded <=> collapsed', [
        animate('300ms ease-out')
      ])
    ])
  ]
})


export class MenuItemComponent {
  @Input() item!:MenuItem
  @Input() isCollape = true
  isExpand = false
  
  constructor(private router: Router){}

  ExpandClick(){
    this.isExpand = !this.isExpand
  }

}
