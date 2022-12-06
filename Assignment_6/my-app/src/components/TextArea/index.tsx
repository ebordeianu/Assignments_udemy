import { TextAreaProps } from './interface';

export default function TextArea({
  type,
  change,
  semiPlaceHolder,
}: TextAreaProps) {
  return <textarea id={type} placeholder={semiPlaceHolder} onChange={change} />;
}
