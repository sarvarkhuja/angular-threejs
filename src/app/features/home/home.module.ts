import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiHintModule,
  TuiLinkModule,
} from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiDataListWrapperModule,
  TuiSelectModule,
} from '@taiga-ui/kit';

import { IconModule } from '../../shared/ui/icon/icon.module';
import { HomeIndexComponent } from './components/home-index/home-index.component';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { ColorNamePipe } from './components/single-entry-form/color-name.pipe';
import { SingleEntryFormComponent } from './components/single-entry-form/single-entry-form.component';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';
import { SingleEntryCanvasComponent } from './components/single-entry-canvas/single-entry-canvas.component';

@NgModule({
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiHintModule,
    TuiAvatarModule,
    IconModule,
    HomeRoutes,
    FormsModule,
    ReactiveFormsModule,
    TuiDataListModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    IconModule,
  ],
  declarations: [
    HomeComponent,
    HomeIndexComponent,
    SingleEntryCanvasComponent,
    SingleEntryComponent,
    SingleEntryFormComponent,
    ColorNamePipe,
  ],
})
export class HomeModule {}
