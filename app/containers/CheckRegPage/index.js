/*
 *
 * CheckRegPage
 *
 */

import React from 'react';
import styles from './styles.css';

export class CheckRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.checkRegPage}>
        {this.props.children}
      </div>
    );
  }
}

CheckRegPage.propTypes = {
  children: React.PropTypes.node,
};

export default CheckRegPage;
