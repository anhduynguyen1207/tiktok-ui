import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './SuggestedAcounts.module.scss';
// import AccountItem from './AcountItem';
import * as searchServices from '~/services/searchServices'
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles);


function SuggestedAcounts({ label }) {
    const [suggestAccount, setSuggestAccount] = useState([]);
    // const [followingAccount, setFollowingAccount] = useState([]);
    const deps = 0
    useEffect(() => {

        const fetchApi = async () => {

            const results = await searchServices.suggested()
            setSuggestAccount(results);

            // const results2 = await searchServices.following()
            // setFollowingAccount(results2);

        };
        fetchApi()

    }, [deps])

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {suggestAccount.map(result => (
                <AccountItem key={result.id} data={result} />
            ))}
            <p className={cx('more-btn')}>See all</p>


        </div>
    );
}
SuggestedAcounts.propTypes = {

}
export default SuggestedAcounts;