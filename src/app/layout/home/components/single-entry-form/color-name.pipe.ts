import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ColorNamePipe',
})
export class ColorNamePipe implements PipeTransform {
  selected: string = '';

  transform(value: any, colorlist$: any): any {
    colorlist$.forEach((item: any) => {
      if (item.id === value) {
        this.selected = item.name;
      }
    });
    return this.selected;
  }
}
