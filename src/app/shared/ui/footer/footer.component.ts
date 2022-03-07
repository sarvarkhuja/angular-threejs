import { Component } from '@angular/core';

import { ConfigService } from '../../../core/services';

@Component({
  selector: 'aa-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly now = new Date();
  readonly version = this.configService.getVersion();

  constructor(private configService: ConfigService) {}
}
