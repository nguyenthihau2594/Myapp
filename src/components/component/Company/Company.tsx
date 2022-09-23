import cx from "classnames";
import s from "./Company.module.scss";

import { ReactComponent as IconFaq } from "../../../asset/images/icons/ico_faq.svg";
import { ReactComponent as IconContact } from "../../../asset/images/icons/ico_contact.svg";

function Company() {
  return (
    <div className={s.company}>
      <div className={cx(s.company__faq, s.company__item)}>
        <div className={s.company__info}><IconFaq /><span>FAQ</span></div>
      </div>
      <div className={cx(s.company__contact, s.company__item)}>
        <div className={s.company__info}><IconContact /><span>Contact us</span></div>
      </div>
    </div>
  );
}

export default Company;
