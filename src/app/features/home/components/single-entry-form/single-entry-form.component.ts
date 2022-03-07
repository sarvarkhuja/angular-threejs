import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'aa-single-entry-form',
  templateUrl: './single-entry-form.component.html',
  styleUrls: ['./single-entry-form.component.scss'],
})
export class SingleEntryFormComponent implements OnInit {
  colors = [
    { id: '#00ff00', name: 'green' },
    { id: '#3030fd', name: 'blue' },
    { id: '#ffdd2d', name: 'yellow' },
  ];
  form!: FormGroup;
  entryID!: number;
  color = '#00ff00';
  constructor(private data$: HomeService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      colorController: new FormControl(this.color),
    });
  }
  colorChange(event: any) {
    this.data$.updateColor(event);
  }

  onSubmit() {}
}
