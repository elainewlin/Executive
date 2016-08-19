import { createSelector } from 'reselect';

const selectPostRegPageDomain = () => (state) => state.get('PostRegPage').get('params');

const selectState = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.state
);

const selectRegistered = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.registered
);

const selectFormDomain = () => (state) => state.get('form');

const selectEmail = () => createSelector(
  selectFormDomain(),
  (formDomain) => formDomain.EmailForm.values
);

export {
  selectState,
  selectRegistered,
  selectEmail,
};
