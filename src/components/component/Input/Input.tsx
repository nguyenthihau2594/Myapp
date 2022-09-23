
import { InputHTMLAttributes } from "react";
import s from "./Input.module.scss";
import cx from "classnames";

export interface InputProps extends  InputHTMLAttributes<HTMLInputElement> {
  kind: 'type1'|'type2'|'type3'|'type4';
  label?: string;
  error?: string;
  className?: string;
  placeholder?:string;
}

function Input(props: InputProps) {
  const {
    kind,
    label,
    error,
    className,
    placeholder,
    ...rest
  } = props;
  return (
    <div className={s.input_group}>
      <label className={cx(s.input__type, s[`${kind}`])}>
        {label && <span className={s.label_input}>{label}</span>}
        <input type="text" className={cx(s.input)} placeholder={placeholder}
          {... rest}
          />
        {error && <span className={s.error_input}>{error}</span>}
      </label>
    </div>
  );
}

export default Input;
