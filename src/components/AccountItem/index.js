import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from '~/components/Image';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '../SuggestedAcounts/AccountPreview/AccountPreview';
const cx = classNames.bind(styles)



function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('menu-popper')}>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <Tippy
            interactive
            delay={[800, 0]}
            placement='bottom'
            render={renderPreview}
        >
            <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.full_name}
                />
                <div className={cx('infor')}>
                    <h4 className={cx('name')}>
                        {data.full_name}
                        {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                    </h4>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </Link>
        </Tippy>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}
export default AccountItem;