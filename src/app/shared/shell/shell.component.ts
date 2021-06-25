import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  menuClicked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  sidebarToggler() {
    this.menuClicked = !this.menuClicked;
  }

}
