import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DEFAULT_COLOR } from '../../../../core/enum/colors.enum';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'aa-single-entry-form',
  templateUrl: './single-entry-form.component.html',
  styleUrls: ['./single-entry-form.component.scss'],
})
export class SingleEntryFormComponent implements OnInit {
  colors = [
    { id: '#214f4b', name: 'green' },
    { id: '#3030fd', name: 'blue' },
    { id: '#bb9f06', name: 'yellow' },
  ];
  form!: FormGroup;
  entryID!: number;
  color = DEFAULT_COLOR;
  constructor(private data$: HomeService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    //TODO: Web/api/getSingleEntry/{ID}
    this.form = new FormGroup({
      colorController: new FormControl(this.color),
    });
  }
  colorChange(event: any) {
    //TODO:Web/api/updateSingleEntry/{ID}
    this.data$.updateColor(event);
  }

  onSubmit() {
    //TODO:Web/api/updateSingleEntry/{ID}
    console.log(this.form.value);
  }
}
