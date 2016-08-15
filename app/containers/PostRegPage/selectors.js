import { createSelector } from 'reselect';

const selectFormDomain = () => (state) => state.get('form');

const selectEmail = () => createSelector(
  selectFormDomain(),
  (formDomain) => formDomain.EmailForm.values
);

export {
  selectEmail,
};
