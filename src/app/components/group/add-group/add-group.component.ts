import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  windowWidth: number;
  form: FormGroup;
  isSubmitClicked = false;

  modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, false]}],
      [{'font': []}],
      ['bold', 'italic', 'underline'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'align': []}],
      [{'script': 'sub'}, {'script': 'super'}, {'indent': '-1'}, {'indent': '+1'}],
    ]
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;

    this.form = this.fb.group({
      name: [null, [Validators.required]],
      pensionRate: [null, [Validators.required, Validators.min(1)]],
      frequency: [null, [Validators.required]],
      contribution: [null, [Validators.required]],
      county: [null, [Validators.required]],
      rules: [null, [Validators.required]],
      penalties: [null, [Validators.required]]
    });
  }

  onResize($event: any) {
    this.windowWidth = $event.target.innerWidth;
  }

  get groupForm() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.isSubmitClicked = true;
    console.log(this.form.value);
  }

}
