import PropTypes from 'prop-types';
// import React from 'react';
import './GlobalStyles.scss'

function GlobalStyles({ children }) {
    //cách chỉ để nhận 1 children only
    // return React.Children.only(children)
    return children
}
GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
}
export default GlobalStyles