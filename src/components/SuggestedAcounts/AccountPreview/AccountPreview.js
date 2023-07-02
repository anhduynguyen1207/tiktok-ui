import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6d0fc23ef2648de1d19003058b26710f.jpeg?x-expires=1688274000&x-signature=S%2BuKp4HoLJutxbzx95g1ksnE084%3D"
                    alt=''
                />
                <Button primary small>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ngvana</strong>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </p>
                <span className={cx('name')}>Nguyen Van A</span>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>10.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>


        </div>
    );
}
AccountPreview.propTypes = {
}
export default AccountPreview;