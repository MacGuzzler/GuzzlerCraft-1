export interface Change {
  text: String;
  explanation: String;
}

export interface ChangeCategory {
  innerCategories?: ChangeCategory[];
  title: string;
  changes: Change[];
  typeName?: string;
}