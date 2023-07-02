import config from "~/config";
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faLanguage, faQuestionCircle, faKeyboard, faCoins, faGear, faUser, faBookmark, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Search from '../Search';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';

import { UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: 'Japanese'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
];

function Header() {
    const currentUser = true;


    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/coins'
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorite',
            to: '/favorite'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Favorite',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Seetiings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}> <img src={images.logo} alt='Tiktok' /></Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy

                                delay={[0, 200]}
                                content="Upload video"
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            {/* <Button rounded className={cx('custom-btn')}>Login</Button> */}
                            <Button primary>Login</Button>
                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c31c83118ae405994c36ab1b85ed97ff~c5_100x100.jpeg?x-expires=1688108400&x-signature=vnHIQLxerpp8I5OMoY7InFY0Sfo%3D"
                                alt='Nguyen Anh Duy'
                                fallback='https://files.fullstack.edu.vn/f8-prod/user_photos/333549/64942e5c7bd78.jpg'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;