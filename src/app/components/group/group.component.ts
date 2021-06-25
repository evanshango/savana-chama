import {Component, OnDestroy, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AddGroupComponent} from './add-group/add-group.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit, OnDestroy {
  ref: DynamicDialogRef;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  showDialog(): void {
    this.ref = this.dialogService.open(AddGroupComponent, {
      header: 'Add a Group',
      contentStyle: {'max-height': '800px', 'overflow-y': 'auto'},
      baseZIndex: 10000
    });
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
