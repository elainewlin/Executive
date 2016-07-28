/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import Img from 'components/Img';
import Footer from 'components/Footer';
import StateSelect from 'components/StateSelect';
import CheckRegistrationForm from 'components/CheckRegistrationForm';
import { IndexLink, Link } from 'react-router';
import styles from './styles.css';

function App(props) {

  //Clean up site navigation later
  return (
    <div className={styles.wrapper}>
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <IndexLink to='/' className='navbar-brand' activeClassName='activeRoute'>
              VoteMate
            </IndexLink>
          </div>
          <div id='navbar' className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li>
                <Link to='/check' activeClassName='activeRoute'>
                  Check
                </Link>
              </li>
              <li>
                <Link to='/no' activeClassName='activeRoute'>
                  No
                </Link>
              </li>
              <li>
                <Link to='/yes' activeClassName='activeRoute'>
                  Yes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>Are you #VoteReady?</h1>
      <h2>Check your registration</h2>
      <StateSelect />
      <CheckRegistrationForm />      
    </div>
  );
}
App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
