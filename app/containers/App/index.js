/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

import Header from 'components/Header';
// import styles from './styles.css';

function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - VoteMate"
        defaultTitle="VoteMate"
        meta={[
          { name: 'description', content: 'A guide to the voting process' },
        ]}
      />
      <Header />
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}
App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
