export interface Identificable {
  id: string;
  name: string;
}

export interface IFolder extends Identificable {
  subItems: (IFolder | IFile)[];
  isExpanded?: boolean;
  isRoot?: boolean;
}

export interface IFile extends Identificable {
  content: string;
}

export type TFileSystemItem = IFolder | IFile;
