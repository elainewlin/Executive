import { createSelector } from 'reselect';

const selectPostRegPageDomain = () => (state) => state.get('PostRegPage');

const selectSubmitted = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('isSubmitted')
);

const selectState = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('params').state
);

const selectRegistered = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('params').registered
);

const selectFormDomain = () => (state) => state.get('form');

const selectEmail = () => createSelector(
  selectFormDomain(),
  (formDomain) => formDomain.EmailForm.values
);

export {
  selectSubmitted,
  selectState,
  selectRegistered,
  selectEmail,
};
