import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuClicked!: boolean;
  // @Input() windowWidth!: number;
  windowWidth!: number;
  showSidebar = false;
  sidebarActions: any;

  constructor() {
  }

  ngOnInit(): void {
    this._initializeMenu();
    this.windowWidth = window.innerWidth;
  }

  windowResize($event: any): void {
    this.windowWidth = $event.target.innerWidth;
  }

  private _initializeMenu(): void {
    this.sidebarActions = [
      {
        title: 'Actions', data: [
          {name: 'Dashboard', link: 'dashboard', icon: 'pi pi-th-large'},
          {name: 'Groups', link: 'groups', icon: 'pi pi-clone'},
          {name: 'Users', link: 'users', icon: 'pi pi-users'},
          {name: 'Loans', link: 'loans', icon: 'pi pi-money-bill'},
        ]
      },
      {
        title: 'Applications', data: [
          {name: 'Savana Admin', link: '#', icon: 'pi pi-unlock'},
          {name: 'Savana Client', link: '#', icon: 'pi pi-shopping-cart'},
          {name: 'Notifications', link: '#', icon: 'pi pi-bell'},
        ]
      },
      {
        title: 'Settings', data: [
          {name: 'Account', link: 'account', icon: 'pi pi-user-edit'},
          {name: 'Site Settings', link: 'settings', icon: 'pi pi-cog'},
        ]
      }
    ];
  }

}
