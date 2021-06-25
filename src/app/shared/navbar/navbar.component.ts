import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() menuClicked = new EventEmitter<boolean>();
  @Output() windowResized: EventEmitter<any> = new EventEmitter<any>();
  menuIconClicked = false

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.menuIconClicked = !this.menuIconClicked
    this.menuClicked.emit(this.menuIconClicked);
  }

  onResize($event: any): void {
    this.windowResized.emit($event)
  }
}
