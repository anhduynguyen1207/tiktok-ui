import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import { HomeIcon, HomeActiveIcon, PeopleIcon, PeopleActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons/Icons';
import SuggestedAcounts from "~/components/SuggestedAcounts";
const cx = classNames.bind(styles)


function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<PeopleIcon />} activeIcon={<PeopleActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAcounts label='Suggested accounts' />

            <SuggestedAcounts label='Following accounts' />
        </aside>
    );
}

export default Sidebar;