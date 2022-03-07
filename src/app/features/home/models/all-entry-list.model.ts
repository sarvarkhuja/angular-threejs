import { GetAllEntryList } from './get-all-entry-list.model';
export const allEntryList: GetAllEntryList[] = [
  {
    entryID: 1,
    title: `3D element ID 1`,
    description: `Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English`,
    addedDate: new Date('2022-03-30'),
    isActive: true,
    link: 'https://angular.io/',
    github: 'https://github.com/angular/angular',
    docs: 'https://angular.io/docs',
  },
  {
    entryID: 2,
    title: '3D element ID 2',
    description:
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    addedDate: new Date('2022-03-30'),
    isActive: true,
    link: 'https://ngrx.io/',
    github: 'https://github.com/ngrx/platform',
    docs: 'https://ngrx.io/docs',
  },
  {
    entryID: 3,
    title: '3D element ID 3.',
    description:
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    addedDate: new Date('2022-03-30'),
    link: 'https://rxjs.dev/',
    isActive: true,
    github: 'https://github.com/ReactiveX/rxjs',
    docs: 'https://rxjs.dev/guide/overview',
  },
  {
    entryID: 4,
    title: '3D element ID 4',
    description:
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    link: 'https://taiga-ui.dev/',
    addedDate: new Date('2022-03-30'),
    isActive: true,
    github: 'https://github.com/TinkoffCreditSystems/taiga-ui',
    docs: 'https://taiga-ui.dev/getting-started',
  },
];
