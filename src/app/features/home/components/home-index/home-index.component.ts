import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allEntryList } from '../../models/all-entry-list.model';
import { GetAllEntryList } from '../../models/get-all-entry-list.model';

@Component({
  selector: 'aa-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent {
  showAllFeatures = false;
  get allEntries(): GetAllEntryList[] {
    return allEntryList;
  }
}
