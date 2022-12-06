export interface TextAreaProps {
  type: string;
  change(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  semiPlaceHolder: string;
}
