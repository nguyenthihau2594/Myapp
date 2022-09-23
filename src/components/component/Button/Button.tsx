
import { ButtonHTMLAttributes } from "react";
import s from './Button.module.scss';
import cx from "classnames";

export interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement> {
  as:'button'|'a';
  kind: 'primary'|'primary__white'|'secondary'|'tertiary'|'textlink';
  isFullWidth?:boolean;
  className?:string;
  disable?:boolean;
  link?:string;
  children: string;
}

function Button(props: ButtonProps) {
  const {as,
    kind,
    isFullWidth=false,
    className,
    disable=false,
    link,
    children,
    ...rest
  } = props;
  return (
    <>
      {as==='button' ? (
        <button  type="button" 
        className={cx(s.button,
         s[`${kind}`], 
         {[s.full_size]:isFullWidth},
         className
         )}
        disabled={disable}
        {...rest}>
        {children}
      </button>
      ):(
        <a href={link} className={cx(s.button, s[`${kind}`])}>{children}</a>
      )
      }
    </>
  );
}

export default Button;
