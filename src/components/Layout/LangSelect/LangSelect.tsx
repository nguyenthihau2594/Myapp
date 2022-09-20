import {useState} from 'react';
import { Menu } from '@headlessui/react';
import s from "./LangSelect.module.scss";

import { ReactComponent as IconLang } from "../../../asset/images/icons/ico_language.svg";
import cx from "classnames";

const language = ['KR','EN','CN'];

function LangSelect() {

  const [select,setSelect] = useState('KR');

  return (
    <>
    <Menu as="div" className={cx(s.langselect)}>
      <Menu.Button className={cx(s.btn_langselect)}><IconLang /><span className={cx(s.langselect__text)}>{select}</span></Menu.Button>
      <Menu.Items className={cx(s.langselect__list)}>
        {language.map((item,index)=>(
          <Menu.Item key={index}
          as="button"
          onClick={() => setSelect(language[index])} 
          className={cx(s.langselect__item)}>{item}</Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
    </>
  );
}

export default LangSelect;
