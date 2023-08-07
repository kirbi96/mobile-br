export enum EFileType {
  APPLICATION = 'application',
}

export interface IFile {
  uuid: string;
  type: EFileType;
  url: string;
  exception: string;
}
