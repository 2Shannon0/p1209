interface Props {
  value: boolean;
  onChange: VoidFunction;
}
export const Checkbox: React.FC<Props> = ({ value, onChange }) => {
  return <input type="checkbox" checked={value} onChange={onChange} />;
};
