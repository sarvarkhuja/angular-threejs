import { Component } from '@angular/core';

import { AuthFacade } from '../../../auth/store/auth.facade';

@Component({
  selector: 'aa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly menuItems = [
    { link: '/home', label: 'Home', icon: null },
    { link: '/dashboard', label: 'Dashboard', icon: 'tuiIconLock' },
  ];
  authUser$ = this.authFacade.user$;

  constructor(private authFacade: AuthFacade) {}

  logout() {
    this.authFacade.logout();
  }
}
