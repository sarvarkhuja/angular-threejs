export interface GetAllEntryList {
  entryID: number;
  title: string;
  description: string;
  addedDate: Date;
  isActive: true;
  link: string | null;
  github: string | null;
  docs: string | null;
}
