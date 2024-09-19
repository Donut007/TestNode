import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MenuItemComponent } from '../Tool/menu-item/menu-item.component';

export type MenuItem = {
  icon: string;
  name: string;
  route?: string;
  subMenu?: MenuItem[];
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    MenuItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('sider') sidenav!: MatSidenav;

  MenuSourse: MenuItem[] = [
    {
      icon: 'house',
      name: 'Dashboard',
      route: 'home/dashboard',
    },
    {
      icon: 'storage',
      name: 'Master',
      subMenu: [
        {
          icon: 'engineering',
          name: 'Role',
          route: '',
        },
        {
          icon: 'military_tech',
          name: 'Level',
          route: '',
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  ngAfterViewInit(): void {}
}
