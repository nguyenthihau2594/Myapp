
import { InputHTMLAttributes } from "react";
import s from "./Input.module.scss";
import cx from "classnames";

export interface InputProps extends  InputHTMLAttributes<HTMLInputElement> {
  kind: 'type1'|'type2'|'type3';
  label: string;
  error?: string;
  className?: string;
}

function Input(props: InputProps) {
  const {
    kind,
    label,
    error,
    className,
    ...rest
  } = props;
  return (
    <div className={s.input_group}>
      <label>
        <span className={s.label_input}>{label}</span>
        <input type="text" className={cx(s[`${kind}`], s.input)} />
      </label>
    </div>
  );
}

export default Input;
