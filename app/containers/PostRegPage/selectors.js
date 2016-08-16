import { createSelector } from 'reselect';

const selectPostRegPageDomain = () => (state) => state.get('PostRegPage');

const selectState = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('params')
);

const selectFormDomain = () => (state) => state.get('form');

const selectEmail = () => createSelector(
  selectFormDomain(),
  (formDomain) => formDomain.EmailForm.values
);

export {
  selectState,
  selectEmail,
};
