import { createSelector } from 'reselect';

const selectPostRegPageDomain = () => (state) => state.get('PostRegPage');

const selectIsOpen = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('isOpen')
);

const selectState = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('params').state
);

const selectRegistered = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('params').registered || 'false'
);

const selectFormDomain = () => (state) => state.get('form');

const selectEmail = () => createSelector(
  selectFormDomain(),
  (formDomain) => formDomain.EmailForm.values
);

export {
  selectIsOpen,
  selectState,
  selectRegistered,
  selectEmail,
};
