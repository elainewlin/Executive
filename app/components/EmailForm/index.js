/**
*
* EmailForm
*
*/

import React from 'react';

function EmailForm(props) {
  return (
    <div class='col-xs-12'>
    <input type='email'></input>
    <button type='submit' onClick={props.submitEmail}>Submit Email</button>
    </div>
  );
}

EmailForm.propTypes = {
  submitEmail: React.PropTypes.func,
};

export default EmailForm;
