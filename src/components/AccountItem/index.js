import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)



function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1688101200&x-signature=Q7cfwHp%2FWUZas4zZQZGyYMDmVS8%3D" alt="Hoa" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    Nguyen Anh Duy
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>anhduy07</span>
            </div>
        </div>
    );
}

export default AccountItem;