export interface Identificable {
  id: string;
  name: string;
}

export interface IFolder extends Identificable {
  subItems: (IFolder | IFile)[];
}

export interface IFile extends Identificable {
  content: string;
}

export type TFileSystemItem = IFolder | IFile;
